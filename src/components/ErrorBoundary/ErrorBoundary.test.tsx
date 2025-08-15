import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import { ErrorBoundary, type ErrorBoundaryProps } from './ErrorBoundary';

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>No error content</div>;
};

const getMockErrorBoundaryProps = (
  overrides?: Partial<ErrorBoundaryProps>
): ErrorBoundaryProps => ({
  children: <div>Test content</div>,
  ...overrides,
});

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error;
  
  beforeEach(() => {
    console.error = vi.fn();
  });
  
  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('should render children when there is no error', () => {
    const props = getMockErrorBoundaryProps({
      children: <div>Normal content</div>
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(screen.getByText('Normal content')).toBeInTheDocument();
  });

  it('should display error fallback when child component throws', () => {
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  it('should show error details in development mode', () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(screen.getByText(/Test error message/)).toBeInTheDocument();
    
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('should hide error details in production mode', () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(screen.queryByText(/Test error message/)).not.toBeInTheDocument();
    
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('should call onError callback when error occurs', () => {
    const mockOnError = vi.fn();
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />,
      onError: mockOnError
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(mockOnError).toHaveBeenCalledTimes(1);
    expect(mockOnError).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Test error message'
      }),
      expect.objectContaining({
        componentStack: expect.any(String)
      })
    );
  });

  it('should render custom fallback component when provided', () => {
    const CustomFallback = () => <div>Custom error UI</div>;
    
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />,
      fallback: <CustomFallback />
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(screen.getByText('Custom error UI')).toBeInTheDocument();
    expect(screen.queryByText(/Something went wrong/i)).not.toBeInTheDocument();
  });

  it('should provide retry functionality', async () => {
    const user = userEvent.setup();
    let shouldThrow = true;
    
    const RetryComponent = () => {
      if (shouldThrow) {
        throw new Error('First attempt failed');
      }
      return <div>Success on retry</div>;
    };
    
    const props = getMockErrorBoundaryProps({
      children: <RetryComponent />
    });
    
    render(<ErrorBoundary {...props} />);
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    
    const retryButton = screen.getByRole('button', { name: /try again/i });
    
    shouldThrow = false;
    await user.click(retryButton);
    
    expect(screen.getByText('Success on retry')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />
    });
    
    render(<ErrorBoundary {...props} />);
    
    const errorContainer = screen.getByRole('alert');
    expect(errorContainer).toHaveAttribute('aria-live', 'assertive');
  });

  it('should support keyboard navigation for retry button', async () => {
    const user = userEvent.setup();
    
    const props = getMockErrorBoundaryProps({
      children: <ThrowError shouldThrow={true} />
    });
    
    render(<ErrorBoundary {...props} />);
    
    const retryButton = screen.getByRole('button', { name: /try again/i });
    retryButton.focus();
    
    expect(retryButton).toHaveFocus();
    
    await user.keyboard('{Enter}');
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});