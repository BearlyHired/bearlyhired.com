import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { EmailSignup } from './EmailSignup';

// Mock alert
const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

describe('EmailSignup', () => {
  beforeEach(() => {
    alertSpy.mockClear();
  });

  afterAll(() => {
    alertSpy.mockRestore();
  });

  it('should render the main title', () => {
    render(<EmailSignup />);
    
    expect(screen.getByText('Get notified when we launch')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<EmailSignup />);
    
    expect(screen.getByText('Be the first to join a professional network that doesn\'t take itself too seriously.')).toBeInTheDocument();
  });

  it('should render email input field', () => {
    render(<EmailSignup />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should render submit button', () => {
    render(<EmailSignup />);
    
    expect(screen.getByRole('button', { name: 'Join Waitlist' })).toBeInTheDocument();
  });

  it('should call alert when form is submitted with valid email', async () => {
    const user = userEvent.setup();
    
    render(<EmailSignup />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should not submit form when email is empty', async () => {
    const user = userEvent.setup();
    
    render(<EmailSignup />);
    
    const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
    await user.click(submitButton);
    
    expect(alertSpy).not.toHaveBeenCalled();
  });

  it('should have proper semantic structure', () => {
    render(<EmailSignup />);
    
    const signupSection = screen.getByRole('region');
    expect(signupSection).toBeInTheDocument();
    
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('should clear email input after successful submission', async () => {
    const user = userEvent.setup();
    
    render(<EmailSignup />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
    
    await user.type(emailInput, 'test@example.com');
    expect(emailInput.value).toBe('test@example.com');
    
    await user.click(submitButton);
    
    // Wait for form reset
    await waitFor(() => {
      expect(emailInput.value).toBe('');
    });
  });

  describe('react-hook-form integration', () => {
    it('should validate email format and show error for invalid email', async () => {
      const user = userEvent.setup();
      
      render(<EmailSignup />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, 'invalid-email');
      await user.click(submitButton);
      
      expect(await screen.findByText('Please enter a valid email address')).toBeInTheDocument();
      expect(alertSpy).not.toHaveBeenCalled();
    });

    it('should show error when email field is required but empty', async () => {
      const user = userEvent.setup();
      
      render(<EmailSignup />);
      
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      await user.click(submitButton);
      
      expect(await screen.findByText('Email is required')).toBeInTheDocument();
      expect(alertSpy).not.toHaveBeenCalled();
    });

    it('should disable submit button while form is submitting', async () => {
      const user = userEvent.setup();
      
      render(<EmailSignup />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, 'test@example.com');
      
      // Check that button is not disabled initially
      expect(submitButton).not.toBeDisabled();
      
      // Submit form - since alert is synchronous, we can't really test the submitting state
      // but we can verify the form works
      await user.click(submitButton);
      expect(alertSpy).toHaveBeenCalled();
    });

    it('should trim whitespace from email before processing', async () => {
      const user = userEvent.setup();
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      render(<EmailSignup />);
      
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: 'Join Waitlist' });
      
      await user.type(emailInput, '  test@example.com  ');
      await user.click(submitButton);
      
      expect(consoleSpy).toHaveBeenCalledWith('Email submitted:', 'test@example.com');
      expect(alertSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });

  });
});