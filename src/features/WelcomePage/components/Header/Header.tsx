import { useTranslation } from 'react-i18next';
import logoImage from '@/assets/images/logo.png';

import styles from './Header.module.scss';

export type HeaderProps = Record<string, never>;

export const Header = () => {
  const { t } = useTranslation('components', { keyPrefix: 'Header' });

  const handleJoinWaitlist = () => {
    alert('hahahha just joking there is not waitlist');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img 
            src={logoImage} 
            alt={t('Bearly Hired')}
            className={styles.logoImage}
          />
        </div>
        <button 
          className={styles.joinWaitlistButton}
          onClick={handleJoinWaitlist}
          type="button"
        >
          {t('Join Waitlist')}
        </button>
      </div>
    </header>
  );
};