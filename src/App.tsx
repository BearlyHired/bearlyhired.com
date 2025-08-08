import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTranslation } from '@/hooks/useTranslation';

function App() {
  const [count, setCount] = useState(0);
  const { t, changeLanguage, currentLanguage } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      {/* Language Switcher */}
      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={() => changeLanguage('en')}
          style={{ 
            marginRight: '0.5rem',
            backgroundColor: currentLanguage === 'en' ? '#646cff' : '#f9f9f9',
            color: currentLanguage === 'en' ? 'white' : 'black'
          }}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('es')}
          style={{ 
            backgroundColor: currentLanguage === 'es' ? '#646cff' : '#f9f9f9',
            color: currentLanguage === 'es' ? 'white' : 'black'
          }}
        >
          Español
        </button>
      </div>

      {/* Using translations */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('components.button.loading')} {count}
        </button>
        <p>
          {t('components.navigation.home')} | {t('components.navigation.about')}
        </p>
        <div style={{ marginTop: '1rem' }}>
          <h3>{t('features.auth.login.title')}</h3>
          <p>{t('features.auth.login.subtitle')}</p>
          <button>{t('features.auth.login.signUp')}</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
