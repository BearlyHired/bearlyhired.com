import { useTranslation } from 'react-i18next';
import bearHead from '@/assets/images/bearHead.png';

import styles from './Features.module.scss';

export type FeaturesProps = {
  // No props needed for this component currently
};

export const Features = ({}: FeaturesProps) => {
  const { t } = useTranslation('components', { keyPrefix: 'features' });

  return (
    <section className={styles.features} role="region" aria-labelledby="features-title">
      <div className={styles.featuresContainer}>
        <h2 id="features-title" className={styles.featuresTitle}>
          {t('title')}
        </h2>
        <ul className={styles.featuresGrid}>
          <li className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img 
                src={bearHead} 
                alt="Bear head icon representing no corporate fakery"
                className={styles.featureIconImage}
              />
            </div>
            <h3 className={styles.featureTitle}>
              {t('cards.corporate.title')}
            </h3>
            <p className={styles.featureDescription}>
              {t('cards.corporate.description')}
            </p>
          </li>
          <li className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img 
                src={bearHead} 
                alt="Bear head icon representing making it to lunch"
                className={styles.featureIconImage}
              />
            </div>
            <h3 className={styles.featureTitle}>
              {t('cards.lunch.title')}
            </h3>
            <p className={styles.featureDescription}>
              {t('cards.lunch.description')}
            </p>
          </li>
          <li className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img 
                src={bearHead} 
                alt="Bear head icon representing building in public"
                className={styles.featureIconImage}
              />
            </div>
            <h3 className={styles.featureTitle}>
              {t('cards.public.title')}
            </h3>
            <p className={styles.featureDescription}>
              {t('cards.public.description')}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};