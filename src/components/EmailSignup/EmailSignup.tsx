import { useForm } from 'react-hook-form';
import { useTranslation } from '@/hooks/useTranslation';
import './EmailSignup.css';

export type EmailSignupProps = {
  onSubmit: (email: string) => void;
};

type FormData = {
  email: string;
};

export const EmailSignup = ({ onSubmit }: EmailSignupProps) => {
  const { t } = useTranslation();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    clearErrors
  } = useForm<FormData>({
    mode: 'onSubmit'
  });

  const onFormSubmit = async (data: FormData) => {
    const trimmedEmail = data.email.trim();
    await onSubmit(trimmedEmail);
    reset();
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
          <form className="email-signup-form" onSubmit={handleSubmit(onFormSubmit)} role="form" noValidate>
            <div className="email-input-group">
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  },
                  onChange: () => clearErrors('email')
                })}
                placeholder={t('features.welcome.signup.emailPlaceholder')}
                className="email-input"
                aria-label="Email address"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <button
                type="submit"
                className="email-submit-button"
                disabled={isSubmitting}
              >
                {t('features.welcome.signup.joinWaitlist')}
              </button>
            </div>
            {errors.email && (
              <span id="email-error" className="email-error" role="alert">
                {errors.email.message}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};