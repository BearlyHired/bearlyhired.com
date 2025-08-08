import { useTranslation } from '@/hooks/useTranslation';
import './Features.css';

export type FeaturesProps = {
  // No props needed for this component currently
};

export const Features = ({}: FeaturesProps) => {
  const { t } = useTranslation();

  return (
    <section className="features" role="region" aria-labelledby="features-title">
      <div className="features-container">
        <h2 id="features-title" className="features-title">
          {t('features.welcome.features.title')}
        </h2>
        <ul className="features-grid">
          <li className="feature-card">
            <div className="feature-icon">
              {/* Icon placeholder */}
            </div>
            <h3 className="feature-title">
              {t('features.welcome.features.cards.corporate.title')}
            </h3>
            <p className="feature-description">
              {t('features.welcome.features.cards.corporate.description')}
            </p>
          </li>
          <li className="feature-card">
            <div className="feature-icon">
              {/* Icon placeholder */}
            </div>
            <h3 className="feature-title">
              {t('features.welcome.features.cards.lunch.title')}
            </h3>
            <p className="feature-description">
              {t('features.welcome.features.cards.lunch.description')}
            </p>
          </li>
          <li className="feature-card">
            <div className="feature-icon">
              {/* Icon placeholder */}
            </div>
            <h3 className="feature-title">
              {t('features.welcome.features.cards.public.title')}
            </h3>
            <p className="feature-description">
              {t('features.welcome.features.cards.public.description')}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};