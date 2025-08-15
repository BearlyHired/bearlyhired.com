import { useTranslation } from 'react-i18next';
import logoImage from '@/assets/images/logo.png';

import styles from './Header.module.scss';

export type HeaderProps = {
  onJoinWaitlist: () => void;
};

export const Header = ({ onJoinWaitlist }: HeaderProps) => {
  const { t } = useTranslation('components', { keyPrefix: 'header' });

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img 
            src={logoImage} 
            alt={t('logo')}
            className={styles.logoImage}
          />
        </div>
        <button 
          className={styles.joinWaitlistButton}
          onClick={onJoinWaitlist}
          type="button"
        >
          {t('joinWaitlist')}
        </button>
      </div>
    </header>
  );
};