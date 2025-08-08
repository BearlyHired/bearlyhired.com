import { useTranslation } from '@/hooks/useTranslation';
import heroImage from '@/assets/images/heroImage.png';
import './Hero.css';

export type HeroProps = {
  onJoinWaitlist: () => void;
  onLearnMore: () => void;
};

export const Hero = ({ onJoinWaitlist, onLearnMore }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="hero" role="region" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-primary">
                {t('features.welcome.hero.title')}
              </span>
              <span className="hero-title-secondary">
                {t('features.welcome.hero.subtitle')}
              </span>
            </h1>
            <p className="hero-description">
              {t('features.welcome.hero.description')}
            </p>
            <div className="hero-buttons">
              <button 
                className="hero-button primary"
                onClick={onJoinWaitlist}
                type="button"
              >
                {t('features.welcome.hero.joinWaitlist')}
              </button>
              <button 
                className="hero-button secondary"
                onClick={onLearnMore}
                type="button"
              >
                {t('features.welcome.hero.learnMore')}
              </button>
            </div>
          </div>
          <div className="hero-illustration">
            <img 
              src={heroImage} 
              alt="Bearly Hired mascot - a friendly bear representing professional networking"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};