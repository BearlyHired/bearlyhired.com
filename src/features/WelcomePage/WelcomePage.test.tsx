import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { WelcomePage, type WelcomePageProps } from './WelcomePage';

const getMockWelcomePageProps = (
  overrides?: Partial<WelcomePageProps>
): WelcomePageProps => ({
  onJoinWaitlist: vi.fn(),
  onLearnMore: vi.fn(),
  onEmailSubmit: vi.fn(),
  ...overrides,
});

describe('WelcomePage', () => {
  it('should render all main sections', () => {
    const props = getMockWelcomePageProps();
    render(<WelcomePage {...props} />);
    
    // Check for main structural elements
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content area
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
    
    // Check for specific component elements
    expect(screen.getByAltText('logo')).toBeInTheDocument(); // Header logo
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument(); // Hero title
    expect(screen.getByLabelText('Email address')).toBeInTheDocument(); // Email signup
  });

  it('should handle header join waitlist button click', async () => {
    const user = userEvent.setup();
    const mockOnJoinWaitlist = vi.fn();
    const props = getMockWelcomePageProps({ onJoinWaitlist: mockOnJoinWaitlist });
    
    render(<WelcomePage {...props} />);
    
    // Find the header join waitlist button (first one)
    const headerButton = screen.getAllByRole('button', { name: 'joinWaitlist' })[0];
    await user.click(headerButton);
    
    expect(mockOnJoinWaitlist).toHaveBeenCalledTimes(1);
  });

  it('should handle hero section button clicks', async () => {
    const user = userEvent.setup();
    const mockOnJoinWaitlist = vi.fn();
    const mockOnLearnMore = vi.fn();
    const props = getMockWelcomePageProps({ 
      onJoinWaitlist: mockOnJoinWaitlist,
      onLearnMore: mockOnLearnMore,
    });
    
    render(<WelcomePage {...props} />);
    
    // Find hero buttons
    const joinWaitlistButton = screen.getAllByRole('button', { name: 'joinWaitlist' })[1]; // Second one is from Hero
    const learnMoreButton = screen.getByRole('button', { name: 'learnMore' });
    
    await user.click(joinWaitlistButton);
    expect(mockOnJoinWaitlist).toHaveBeenCalledTimes(1);
    
    await user.click(learnMoreButton);
    expect(mockOnLearnMore).toHaveBeenCalledTimes(1);
  });

  it('should handle email signup form submission', async () => {
    const user = userEvent.setup();
    const mockOnEmailSubmit = vi.fn();
    const props = getMockWelcomePageProps({ onEmailSubmit: mockOnEmailSubmit });
    
    render(<WelcomePage {...props} />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getAllByRole('button', { name: 'joinWaitlist' })[2]; // Third one is from EmailSignup
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(mockOnEmailSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnEmailSubmit).toHaveBeenCalledWith('test@example.com');
  });

  it('should have proper page structure', () => {
    const props = getMockWelcomePageProps();
    render(<WelcomePage {...props} />);
    
    // Check for main page container
    const page = screen.getByRole('main');
    expect(page).toBeInTheDocument();
    
    // Check for footer
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});