import { ErrorBoundary } from '@/components/ErrorBoundary';
import { WelcomePage } from '@/features/WelcomePage';

import './App.css';

function App() {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Application error:', error, errorInfo);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <WelcomePage />
    </ErrorBoundary>
  );
}

export default App;
