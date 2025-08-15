import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { EmailSignup } from './components/EmailSignup';
import { Footer } from '@/components/Footer';

import styles from './WelcomePage.module.scss';

export const WelcomePage = () => {
  const handleJoinWaitlist = () => {
    alert('hahahha just joking there is not waitlist');
  };

  const handleLearnMore = () => {
    window.location.href = 'https://www.linkedin.com/company/bearly-hired/';
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    alert('hahahha just joking there is not waitlist');
  };
  return (
    <div className={styles.welcomePage}>
      <Header onJoinWaitlist={handleJoinWaitlist} />

      <main role="main">
        <Hero onJoinWaitlist={handleJoinWaitlist} onLearnMore={handleLearnMore} />
        <Features />
        <EmailSignup onSubmit={handleEmailSubmit} />
      </main>

      <Footer />
    </div>
  );
};
