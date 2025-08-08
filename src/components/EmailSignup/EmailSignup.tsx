import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import './EmailSignup.css';

export type EmailSignupProps = {
  onSubmit: (email: string) => void;
};

export const EmailSignup = ({ onSubmit }: EmailSignupProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (email.trim()) {
      onSubmit(email.trim());
      setEmail('');
    }
  };

  return (
    <section className="email-signup" role="region" aria-labelledby="signup-title">
      <div className="email-signup-container">
        <div className="email-signup-content">
          <h2 id="signup-title" className="email-signup-title">
            {t('features.welcome.signup.title')}
          </h2>
          <p className="email-signup-subtitle">
            {t('features.welcome.signup.subtitle')}
          </p>
          <form className="email-signup-form" onSubmit={handleSubmit} role="form">
            <div className="email-input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('features.welcome.signup.emailPlaceholder')}
                className="email-input"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="email-submit-button"
              >
                {t('features.welcome.signup.joinWaitlist')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};