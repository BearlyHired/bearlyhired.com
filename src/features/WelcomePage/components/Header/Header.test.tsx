import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { Header } from './Header';

// Mock alert
const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

describe('Header', () => {
  beforeEach(() => {
    alertSpy.mockClear();
  });

  afterAll(() => {
    alertSpy.mockRestore();
  });

  it('should render the logo with proper alt text', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('Bearly Hired');
    expect(logo).toBeInTheDocument();
  });

  it('should render the join waitlist button', () => {
    render(<Header />);
    
    expect(screen.getByRole('button', { name: 'Join Waitlist' })).toBeInTheDocument();
  });

  it('should call alert when join waitlist button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    const joinButton = screen.getByRole('button', { name: 'Join Waitlist' });
    await user.click(joinButton);
    
    expect(alertSpy).toHaveBeenCalledWith('hahahha just joking there is not waitlist');
  });

  it('should have proper semantic structure', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});