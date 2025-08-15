import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './EmailSignup.module.scss';

export type EmailSignupProps = {
  onSubmit: (email: string) => void;
};

type FormData = {
  email: string;
};

export const EmailSignup = ({ onSubmit }: EmailSignupProps) => {
  const { t } = useTranslation('components', { keyPrefix: 'EmailSignup' });
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
    <section className={styles.emailSignup} role="region" aria-labelledby="signup-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="signup-title" className={styles.title}>
            {t('Get Notified')}
          </h2>
          <p className={styles.subtitle}>
            {t('Be The First To Join')}
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)} role="form" noValidate>
            <div className={styles.inputGroup}>
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
                placeholder={t('Enter Email')}
                className={styles.input}
                aria-label="Email address"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {t('Join Waitlist')}
              </button>
            </div>
            {errors.email && (
              <span id="email-error" className={styles.error} role="alert">
                {errors.email.message}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};