import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import LanguageSelector from './components/LanguageSelector';
import OTPVerification from './components/OTPVerification';

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    switch (language) {
      case 'hi':
        setBgColor('blue');
        break;
      case 'zh':
        setBgColor('green');
        break;
      case 'fr':
        setBgColor('yellow');
        break;
      default:
        setBgColor('white');
    }
  }, [language]);

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <LanguageSelector onLanguageChange={setLanguage} />
      <h1>{t('welcome')}</h1>
      <OTPVerification language={language} />
    </div>
  );
}

export default App;
