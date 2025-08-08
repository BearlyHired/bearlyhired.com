import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { Header, type HeaderProps } from './Header';

const getMockHeaderProps = (
  overrides?: Partial<HeaderProps>
): HeaderProps => ({
  onJoinWaitlist: vi.fn(),
  ...overrides,
});

describe('Header', () => {
  it('should render the logo image', () => {
    const props = getMockHeaderProps();
    render(<Header {...props} />);
    
    const logoImage = screen.getByRole('img', { name: 'features.welcome.header.logo' });
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/src/assets/images/logo.png');
  });

  it('should render the Join Waitlist button', () => {
    const props = getMockHeaderProps();
    render(<Header {...props} />);
    
    expect(screen.getByRole('button', { name: 'features.welcome.header.joinWaitlist' })).toBeInTheDocument();
  });

  it('should call onJoinWaitlist when Join Waitlist button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnJoinWaitlist = vi.fn();
    const props = getMockHeaderProps({ onJoinWaitlist: mockOnJoinWaitlist });
    
    render(<Header {...props} />);
    
    await user.click(screen.getByRole('button', { name: 'features.welcome.header.joinWaitlist' }));
    expect(mockOnJoinWaitlist).toHaveBeenCalledTimes(1);
  });

  it('should have proper semantic structure with header tag', () => {
    const props = getMockHeaderProps();
    render(<Header {...props} />);
    
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});