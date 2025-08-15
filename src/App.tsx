import { ErrorBoundary } from '@/components/ErrorBoundary';
import { WelcomePage } from '@/features/WelcomePage';

import './App.css';

function App() {
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

  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Application error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <WelcomePage
        onJoinWaitlist={handleJoinWaitlist}
        onLearnMore={handleLearnMore}
        onEmailSubmit={handleEmailSubmit}
      />
    </ErrorBoundary>
  );
}

export default App;
