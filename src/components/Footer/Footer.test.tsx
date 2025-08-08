import { render, screen } from '@testing-library/react';
import { Footer, type FooterProps } from './Footer';

const getMockFooterProps = (
  overrides?: Partial<FooterProps>
): FooterProps => ({
  ...overrides,
});

describe('Footer', () => {
  it('should render the launch date', () => {
    const props = getMockFooterProps();
    render(<Footer {...props} />);
    
    expect(screen.getByText('features.welcome.footer.launchDate')).toBeInTheDocument();
  });

  it('should render the copyright text', () => {
    const props = getMockFooterProps();
    render(<Footer {...props} />);
    
    expect(screen.getByText('features.welcome.footer.copyright')).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const props = getMockFooterProps();
    render(<Footer {...props} />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render social media links', () => {
    const props = getMockFooterProps();
    render(<Footer {...props} />);
    
    // Check for social links by their aria-labels
    expect(screen.getByLabelText('Follow us on Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Follow us on LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Watch us on Twitch')).toBeInTheDocument();
    expect(screen.getByLabelText('View our GitHub')).toBeInTheDocument();
  });

  it('should have external links with proper attributes', () => {
    const props = getMockFooterProps();
    render(<Footer {...props} />);
    
    const socialLinks = screen.getAllByRole('link');
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});