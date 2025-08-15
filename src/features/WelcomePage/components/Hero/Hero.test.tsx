import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { Hero, type HeroProps } from './Hero';

const getMockHeroProps = (
  overrides?: Partial<HeroProps>
): HeroProps => ({
  onJoinWaitlist: vi.fn(),
  onLearnMore: vi.fn(),
  ...overrides,
});

describe('Hero', () => {
  it('should render the main title', () => {
    const props = getMockHeroProps();
    render(<Hero {...props} />);
    
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    const props = getMockHeroProps();
    render(<Hero {...props} />);
    
    expect(screen.getByText('subtitle')).toBeInTheDocument();
  });

  it('should render the description', () => {
    const props = getMockHeroProps();
    render(<Hero {...props} />);
    
    expect(screen.getByText('description')).toBeInTheDocument();
  });

  it('should render Join the Waitlist button', () => {
    const props = getMockHeroProps();
    render(<Hero {...props} />);
    
    expect(screen.getByRole('button', { name: 'joinWaitlist' })).toBeInTheDocument();
  });

  it('should render Learn More button', () => {
    const props = getMockHeroProps();
    render(<Hero {...props} />);
    
    expect(screen.getByRole('button', { name: 'learnMore' })).toBeInTheDocument();
  });

  it('should call onJoinWaitlist when Join the Waitlist button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnJoinWaitlist = vi.fn();
    const props = getMockHeroProps({ onJoinWaitlist: mockOnJoinWaitlist });
    
    render(<Hero {...props} />);
    
    await user.click(screen.getByRole('button', { name: 'joinWaitlist' }));
    expect(mockOnJoinWaitlist).toHaveBeenCalledTimes(1);
  });

  it('should call onLearnMore when Learn More button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnLearnMore = vi.fn();
    const props = getMockHeroProps({ onLearnMore: mockOnLearnMore });
    
    render(<Hero {...props} />);
    
    await user.click(screen.getByRole('button', { name: 'learnMore' }));
    expect(mockOnLearnMore).toHaveBeenCalledTimes(1);
  });

  it('should have proper semantic structure with section element', () => {
    const props = getMockHeroProps();
    render(<Hero {...props} />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
  });
});