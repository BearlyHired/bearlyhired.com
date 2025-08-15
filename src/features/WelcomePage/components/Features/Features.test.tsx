import { render, screen } from '@testing-library/react';
import { Features, type FeaturesProps } from './Features';

const getMockFeaturesProps = (
  overrides?: Partial<FeaturesProps>
): FeaturesProps => ({
  ...overrides,
});

describe('Features', () => {
  it('should render the main title', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    expect(screen.getByText('Networking for the emotionally employed')).toBeInTheDocument();
  });

  it('should render all three feature cards', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    expect(screen.getByText('No Corporate Fakery')).toBeInTheDocument();
    expect(screen.getByText('Just Trying to Make It to Lunch')).toBeInTheDocument();
    expect(screen.getByText('Built in Public')).toBeInTheDocument();
  });

  it('should render feature card descriptions', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    expect(screen.getByText('Be authentic self without the need for corporate jargon or performance.')).toBeInTheDocument();
    expect(screen.getByText('A community that understands the daily struggle and celebrates small wins.')).toBeInTheDocument();
    expect(screen.getByText('Truly open source and built live on Twitch with complete transparency.')).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    const featuresSection = screen.getByRole('region');
    expect(featuresSection).toBeInTheDocument();
  });

  it('should render feature cards in proper list structure', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    const featuresList = screen.getByRole('list');
    expect(featuresList).toBeInTheDocument();
    
    const featureItems = screen.getAllByRole('listitem');
    expect(featureItems).toHaveLength(3);
  });
});