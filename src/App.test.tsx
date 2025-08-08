import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import App from './App';

// Mock console.log to verify event handlers are called
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('App', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('should render the WelcomePage', () => {
    render(<App />);
    
    // Check that main sections are rendered
    expect(screen.getByText('features.welcome.header.logo')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.hero.title')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.features.title')).toBeInTheDocument();
  });

  it('should handle join waitlist clicks', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Click the header join waitlist button
    const headerButton = screen.getByRole('button', { name: 'features.welcome.header.joinWaitlist' });
    await user.click(headerButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Join waitlist clicked!');
  });

  it('should handle learn more clicks', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Click the learn more button
    const learnMoreButton = screen.getByRole('button', { name: 'features.welcome.hero.learnMore' });
    await user.click(learnMoreButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Learn more clicked!');
  });

  it('should handle email submissions', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: 'features.welcome.signup.joinWaitlist' });
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Email submitted:', 'test@example.com');
  });
});