import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { Hero } from './Hero';

// Mock alert and window.location
const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true,
});

describe('Hero', () => {
  beforeEach(() => {
    alertSpy.mockClear();
    window.location.href = '';
  });

  afterAll(() => {
    alertSpy.mockRestore();
  });

  it('should render the main title', () => {
    render(<Hero />);
    
    expect(screen.getByText('Professional.')).toBeInTheDocument();
    expect(screen.getByText('Bearly.')).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<Hero />);
    
    expect(screen.getByText(/A professional network for actual humans/)).toBeInTheDocument();
  });

  it('should render both action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByRole('button', { name: 'Join the Waitlist' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
  });

  it('should render hero image with proper alt text', () => {
    render(<Hero />);
    
    const heroImage = screen.getByAltText('Bearly Hired mascot - a friendly bear representing professional networking');
    expect(heroImage).toBeInTheDocument();
  });

  it('should call alert when join waitlist button is clicked', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const joinButton = screen.getByRole('button', { name: 'Join the Waitlist' });
    await user.click(joinButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should navigate to LinkedIn when learn more button is clicked', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    
    const learnMoreButton = screen.getByRole('button', { name: 'Learn More' });
    await user.click(learnMoreButton);
    
    expect(window.location.href).toBe('https://www.linkedin.com/company/bearly-hired/');
  });

  it('should have proper semantic structure', () => {
    render(<Hero />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should render with proper heading hierarchy', () => {
    render(<Hero />);
    
    // Should have an h1 as the main title
    const mainTitle = screen.getByRole('heading', { level: 1 });
    expect(mainTitle).toBeInTheDocument();
    expect(mainTitle).toHaveTextContent('Professional.Bearly.');
  });
});