import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const OTPVerification = ({ language }) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleOTPSubmit = () => {
    // Dummy API call simulation
    axios.post('/api/verify-otp', { otp, language })
      .then(response => {
        setIsVerified(true);
        alert('OTP Verified Successfully');
      })
      .catch(error => {
        alert('OTP Verification Failed');
      });
  };

  return (
    <div>
      <h3>{t('otp')}</h3>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleOTPSubmit}>Submit OTP</button>
      {isVerified && <p>Verification Successful</p>}
    </div>
  );
};

export default OTPVerification;
