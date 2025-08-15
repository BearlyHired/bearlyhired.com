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
    
    // Check that main sections are rendered
    expect(screen.getByRole('img', { name: 'Bearly Hired' })).toBeInTheDocument();
    // Check for hero section by its h1 heading
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    // Check for sections by their landmark roles
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('should handle join waitlist clicks', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Click the header join waitlist button (first one)
    const headerButton = screen.getAllByRole('button', { name: 'Join Waitlist' })[0];
    await user.click(headerButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should handle learn more clicks', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Click the learn more button
    const learnMoreButton = screen.getByRole('button', { name: 'Learn More' });
    await user.click(learnMoreButton);
    
    expect(window.location.href).toBe('https://www.linkedin.com/company/bearly-hired/');
  });

  it('should handle email submissions', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getAllByRole('button', { name: 'Join Waitlist' })[2]; // Third one is EmailSignup submit button
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });
});