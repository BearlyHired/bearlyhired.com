import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { EmailSignup, type EmailSignupProps } from './EmailSignup';

const getMockEmailSignupProps = (
  overrides?: Partial<EmailSignupProps>
): EmailSignupProps => ({
  onSubmit: vi.fn(),
  ...overrides,
});

describe('EmailSignup', () => {
  it('should render the main title', () => {
    const props = getMockEmailSignupProps();
    render(<EmailSignup {...props} />);
    
    expect(screen.getByText('Get notified when we launch')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    const props = getMockEmailSignupProps();
    render(<EmailSignup {...props} />);
    
    expect(screen.getByText('Be the first to join a professional network that doesn\'t take itself too seriously.')).toBeInTheDocument();
  });

  it('should render email input field', () => {
    const props = getMockEmailSignupProps();
    render(<EmailSignup {...props} />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should render submit button', () => {
    const props = getMockEmailSignupProps();
    render(<EmailSignup {...props} />);
    
    expect(screen.getByRole('button', { name: 'Join Waitlist' })).toBeInTheDocument();
  });

  it('should call onSubmit when form is submitted with valid email', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
    
    render(<EmailSignup {...props} />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith('test@example.com');
  });

  it('should not call onSubmit when form is submitted with empty email', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
    
    render(<EmailSignup {...props} />);
    
    const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
    await user.click(submitButton);
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('should have proper semantic structure', () => {
    const props = getMockEmailSignupProps();
    render(<EmailSignup {...props} />);
    
    const signupSection = screen.getByRole('region');
    expect(signupSection).toBeInTheDocument();
    
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('should clear email input after successful submission', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
    
    render(<EmailSignup {...props} />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
    
    await user.type(emailInput, 'test@example.com');
    expect(emailInput.value).toBe('test@example.com');
    
    await user.click(submitButton);
    
    expect(emailInput.value).toBe('');
  });

  describe('react-hook-form integration', () => {
    it('should validate email format and show error for invalid email', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
      
      render(<EmailSignup {...props} />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, 'invalid-email');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
      });
      
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should show error when email field is required but empty', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
      
      render(<EmailSignup {...props} />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.click(emailInput);
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
      });
      
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should disable submit button while form is submitting', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
      const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
      
      render(<EmailSignup {...props} />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, 'test@example.com');
      await user.click(submitButton);
      
      expect(submitButton).toBeDisabled();
      
      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });

    it('should trim whitespace from email before validation', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
      
      render(<EmailSignup {...props} />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, '  test@example.com  ');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith('test@example.com');
      });
    });

    it('should clear validation errors when user starts typing again', async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
      
      render(<EmailSignup {...props} />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, 'invalid');
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
      });
      
      await user.clear(emailInput);
      await user.type(emailInput, 'valid@example.com');
      
      expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument();
    });
  });
});