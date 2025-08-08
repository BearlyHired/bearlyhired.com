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
    
    expect(screen.getByText('features.welcome.features.title')).toBeInTheDocument();
  });

  it('should render all three feature cards', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    expect(screen.getByText('features.welcome.features.cards.corporate.title')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.features.cards.lunch.title')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.features.cards.public.title')).toBeInTheDocument();
  });

  it('should render feature card descriptions', () => {
    const props = getMockFeaturesProps();
    render(<Features {...props} />);
    
    expect(screen.getByText('features.welcome.features.cards.corporate.description')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.features.cards.lunch.description')).toBeInTheDocument();
    expect(screen.getByText('features.welcome.features.cards.public.description')).toBeInTheDocument();
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