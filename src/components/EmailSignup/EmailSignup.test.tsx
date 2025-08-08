import { render, screen } from '@testing-library/react';
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
    
    expect(screen.getByText('features.welcome.signup.title')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    const props = getMockEmailSignupProps();
    render(<EmailSignup {...props} />);
    
    expect(screen.getByText('features.welcome.signup.subtitle')).toBeInTheDocument();
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
    
    expect(screen.getByRole('button', { name: 'features.welcome.signup.joinWaitlist' })).toBeInTheDocument();
  });

  it('should call onSubmit when form is submitted with valid email', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    const props = getMockEmailSignupProps({ onSubmit: mockOnSubmit });
    
    render(<EmailSignup {...props} />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: 'features.welcome.signup.joinWaitlist' });
    
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
    
    const submitButton = screen.getByRole('button', { name: 'features.welcome.signup.joinWaitlist' });
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
    const submitButton = screen.getByRole('button', { name: 'features.welcome.signup.joinWaitlist' });
    
    await user.type(emailInput, 'test@example.com');
    expect(emailInput.value).toBe('test@example.com');
    
    await user.click(submitButton);
    
    expect(emailInput.value).toBe('');
  });
});