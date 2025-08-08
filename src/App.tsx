import { WelcomePage } from '@/features/WelcomePage';
import './App.css';

function App() {
  const handleJoinWaitlist = () => {
    console.log('Join waitlist clicked!');
    // TODO: Implement waitlist signup logic
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked!');
    // TODO: Implement learn more navigation
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // TODO: Implement email submission logic
  };

  return (
    <WelcomePage
      onJoinWaitlist={handleJoinWaitlist}
      onLearnMore={handleLearnMore}
      onEmailSubmit={handleEmailSubmit}
    />
  );
}

export default App;
