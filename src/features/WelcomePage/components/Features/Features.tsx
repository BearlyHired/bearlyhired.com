import { useTranslation } from 'react-i18next';
import bearHead from '@/assets/images/bearHead.png';

import styles from './Features.module.scss';

export type FeaturesProps = {
  // No props needed for this component currently
};

export const Features = ({}: FeaturesProps) => {
  const { t } = useTranslation('components', { keyPrefix: 'Features' });

  return (
    <section className={styles.features} role="region" aria-labelledby="features-title">
      <div className={styles.featuresContainer}>
        <h2 id="features-title" className={styles.featuresTitle}>
          {t('Emotionally Employed Title')}
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
              {t('cards.corporate.No Corporate Fakery')}
            </h3>
            <p className={styles.featureDescription}>
              {t('cards.corporate.Be Authentic')}
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
              {t('cards.lunch.Make It To Lunch')}
            </h3>
            <p className={styles.featureDescription}>
              {t('cards.lunch.Daily Struggle')}
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
              {t('cards.public.Built In Public')}
            </h3>
            <p className={styles.featureDescription}>
              {t('cards.public.Open Source Twitch')}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};