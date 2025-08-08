import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { EmailSignup } from '@/components/EmailSignup';
import { Footer } from '@/components/Footer';
import './WelcomePage.css';

export type WelcomePageProps = {
  onJoinWaitlist: () => void;
  onLearnMore: () => void;
  onEmailSubmit: (email: string) => void;
};

export const WelcomePage = ({ 
  onJoinWaitlist, 
  onLearnMore, 
  onEmailSubmit 
}: WelcomePageProps) => {
  return (
    <div className="welcome-page">
      <Header onJoinWaitlist={onJoinWaitlist} />
      
      <main role="main">
        <Hero 
          onJoinWaitlist={onJoinWaitlist} 
          onLearnMore={onLearnMore} 
        />
        <Features />
        <EmailSignup onSubmit={onEmailSubmit} />
      </main>
      
      <Footer />
    </div>
  );
};