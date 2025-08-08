import { WelcomePage } from '@/features/WelcomePage';
import './App.css';

function App() {
  const handleJoinWaitlist = () => {
    alert('hahahha just joking there is not waitlist');
  };

  const handleLearnMore = () => {
    window.open('https://www.linkedin.com/company/bearly-hired/', '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (_email: string) => {
    alert('hahahha just joking there is not waitlist');
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
