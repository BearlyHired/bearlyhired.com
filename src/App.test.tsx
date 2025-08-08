import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import App from './App';

// Mock window.alert and window.location
const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

// Mock window.location.href
Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
  writable: true,
});

describe('App', () => {
  beforeEach(() => {
    alertSpy.mockClear();
    window.location.href = '';
  });

  afterAll(() => {
    alertSpy.mockRestore();
  });

  it('should render the WelcomePage', () => {
    render(<App />);
    
    // Check that main sections are rendered (header now uses logo image)
    expect(screen.getByRole('img', { name: 'features.welcome.header.logo' })).toBeInTheDocument();
    expect(screen.getByText('features.welcome.hero.title')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.features.title')).toBeInTheDocument();
  });

  it('should handle join waitlist clicks', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Click the header join waitlist button
    const headerButton = screen.getByRole('button', { name: 'features.welcome.header.joinWaitlist' });
    await user.click(headerButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should handle learn more clicks', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Click the learn more button
    const learnMoreButton = screen.getByRole('button', { name: 'features.welcome.hero.learnMore' });
    await user.click(learnMoreButton);
    
    expect(window.location.href).toBe('https://www.linkedin.com/company/bearly-hired/');
  });

  it('should handle email submissions', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: 'features.welcome.signup.joinWaitlist' });
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });
});