import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/images/heroImage.png';

import styles from './Hero.module.scss';

export type HeroProps = Record<string, never>;

export const Hero = ({}: HeroProps) => {
  const { t } = useTranslation('components', { keyPrefix: 'Hero' });

  const handleJoinWaitlist = () => {
    alert('hahahha just joking there is not waitlist');
  };

  const handleLearnMore = () => {
    window.location.href = 'https://www.linkedin.com/company/bearly-hired/';
  };

  return (
    <section className={styles.hero} role="region" aria-labelledby="hero-title">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 id="hero-title" className={styles.heroTitle}>
              <span className={styles.heroTitlePrimary}>
                {t('Professional Title')}
              </span>
              <span className={styles.heroTitleSecondary}>
                {t('Barely Subtitle')}
              </span>
            </h1>
            <p className={styles.heroDescription}>
              {t('Actual Humans Description')}
            </p>
            <div className={styles.heroButtons}>
              <button 
                className={`${styles.heroButton} ${styles.primary}`}
                onClick={handleJoinWaitlist}
                type="button"
              >
                {t('Join Waitlist')}
              </button>
              <button 
                className={`${styles.heroButton} ${styles.secondary}`}
                onClick={handleLearnMore}
                type="button"
              >
                {t('Learn More')}
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