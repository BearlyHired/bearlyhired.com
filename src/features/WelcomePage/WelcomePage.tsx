import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { EmailSignup } from './components/EmailSignup';
import { Footer } from '@/components/Footer';

import styles from './WelcomePage.module.scss';

export const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <Header />

      <main role="main">
        <Hero />
        <Features />
        <EmailSignup />
      </main>

      <Footer />
    </div>
  );
};
