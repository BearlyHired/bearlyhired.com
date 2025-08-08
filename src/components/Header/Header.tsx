import { useTranslation } from '@/hooks/useTranslation';
import logoImage from '@/assets/images/logo.png';
import './Header.css';

export type HeaderProps = {
  onJoinWaitlist: () => void;
};

export const Header = ({ onJoinWaitlist }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src={logoImage} 
            alt={t('features.welcome.header.logo')}
            className="logo-image"
          />
        </div>
        <button 
          className="join-waitlist-button"
          onClick={onJoinWaitlist}
          type="button"
        >
          {t('features.welcome.header.joinWaitlist')}
        </button>
      </div>
    </header>
  );
};