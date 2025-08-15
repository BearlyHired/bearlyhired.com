import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/images/heroImage.png';

import styles from './Hero.module.scss';

export type HeroProps = {
  onJoinWaitlist: () => void;
  onLearnMore: () => void;
};

export const Hero = ({ onJoinWaitlist, onLearnMore }: HeroProps) => {
  const { t } = useTranslation('components', { keyPrefix: 'hero' });

  return (
    <section className={styles.hero} role="region" aria-labelledby="hero-title">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 id="hero-title" className={styles.heroTitle}>
              <span className={styles.heroTitlePrimary}>
                {t('title')}
              </span>
              <span className={styles.heroTitleSecondary}>
                {t('subtitle')}
              </span>
            </h1>
            <p className={styles.heroDescription}>
              {t('description')}
            </p>
            <div className={styles.heroButtons}>
              <button 
                className={`${styles.heroButton} ${styles.primary}`}
                onClick={onJoinWaitlist}
                type="button"
              >
                {t('joinWaitlist')}
              </button>
              <button 
                className={`${styles.heroButton} ${styles.secondary}`}
                onClick={onLearnMore}
                type="button"
              >
                {t('learnMore')}
              </button>
            </div>
          </div>
          <div className={styles.heroIllustration}>
            <img 
              src={heroImage} 
              alt="Bearly Hired mascot - a friendly bear representing professional networking"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};