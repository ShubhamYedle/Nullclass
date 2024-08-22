import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onLanguageChange(lng);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="hi">Hindi</option>
      <option value="pt">Portuguese</option>
      <option value="zh">Chinese</option>
      <option value="fr">French</option>
    </select>
  );
};

export default LanguageSelector;
