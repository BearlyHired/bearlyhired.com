import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { WelcomePage } from './WelcomePage';

// Mock alert and window.location
const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true,
});

describe('WelcomePage', () => {
  beforeEach(() => {
    alertSpy.mockClear();
    window.location.href = '';
  });

  afterAll(() => {
    alertSpy.mockRestore();
  });

  it('should render all main sections', () => {
    render(<WelcomePage />);
    
    // Check for main structural elements
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content area
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
    
    // Check for specific component elements
    expect(screen.getByAltText('Bearly Hired')).toBeInTheDocument(); // Header logo
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument(); // Hero title
    expect(screen.getByLabelText('Email address')).toBeInTheDocument(); // Email signup
  });

  it('should handle header join waitlist button click', async () => {
    const user = userEvent.setup();
    render(<WelcomePage />);
    
    // Find the header join waitlist button (first one)
    const headerButton = screen.getAllByRole('button', { name: 'Join Waitlist' })[0];
    await user.click(headerButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should handle hero section button clicks', async () => {
    const user = userEvent.setup();
    render(<WelcomePage />);
    
    // Find hero buttons
    const joinWaitlistButton = screen.getAllByRole('button', { name: 'Join the Waitlist' })[0]; // Hero button
    const learnMoreButton = screen.getByRole('button', { name: 'Learn More' });
    
    await user.click(joinWaitlistButton);
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
    
    await user.click(learnMoreButton);
    expect(window.location.href).toBe('https://www.linkedin.com/company/bearly-hired/');
  });

  it('should handle email signup form submission', async () => {
    const user = userEvent.setup();
    render(<WelcomePage />);
    
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getAllByRole('button', { name: 'Join Waitlist' })[1]; // EmailSignup button
    
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should have proper page structure', () => {
    render(<WelcomePage />);
    
    // Check for main page container
    const page = screen.getByRole('main');
    expect(page).toBeInTheDocument();
    
    // Check for footer
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});