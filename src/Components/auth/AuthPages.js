import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { authService } from '../../services/auth';

const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = async (values) => {
    const result = await authService.login(values.email, values.password);
    if (result.success) {
      alert('Giriş başarılı!');
      // Add your success handling here
    } else {
      throw new Error(result.message);
    }
  };

  const handleRegister = async (values) => {
    const result = await authService.register(values.email, values.password, values.name);
    if (result.success) {
      setUserEmail(values.email);
      setCurrentPage('verify');
    } else {
      throw new Error(result.message);
    }
  };

  const handleVerify = async (values) => {
    const result = await authService.verify(userEmail, values.code);
    if (result.success) {
      alert('Email doğrulandı!');
      setCurrentPage('login');
    } else {
      throw new Error(result.message);
    }
  };

  const handleReset = async (values) => {
    const result = await authService.resetPassword(values.email);
    if (result.success) {
      alert('Sıfırlama linki gönderildi!');
      setCurrentPage('login');
    } else {
      throw new Error(result.message);
    }
  };

  const pages = {
    login: {
      title: 'Hoş Geldiniz',
      subtitle: 'Hesabınıza giriş yapın',
      fields: [
        { name: 'email', type: 'email', placeholder: 'Email' },
        { name: 'password', type: 'password', placeholder: 'Şifre' }
      ],
      buttonText: 'Giriş Yap',
      onSubmit: handleLogin
    },

    register: {
      title: 'Kayıt Ol',
      subtitle: 'Yeni hesap oluşturun',
      fields: [
        { name: 'name', type: 'text', placeholder: 'Ad Soyad' },
        { name: 'email', type: 'email', placeholder: 'Email' },
        { name: 'password', type: 'password', placeholder: 'Şifre' }
      ],
      buttonText: 'Kayıt Ol',
      onSubmit: handleRegister
    },

    verify: {
      title: 'Email Doğrulama',
      subtitle: '6 haneli kodu girin',
      fields: [
        { name: 'code', type: 'text', placeholder: '6 haneli kod' }
      ],
      buttonText: 'Doğrula',
      onSubmit: handleVerify,
      bgColor: 'from-purple-50 to-pink-100'
    },

    reset: {
      title: 'Şifremi Unuttum',
      subtitle: 'Email adresinizi girin',
      fields: [
        { name: 'email', type: 'email', placeholder: 'Email' }
      ],
      buttonText: 'Sıfırlama Linki Gönder',
      onSubmit: handleReset,
      bgColor: 'from-orange-50 to-red-100'
    }
  };

  const currentPage = pages[currentPage];

  return (
    <AuthForm
      {...currentPage}
      onPageChange={setCurrentPage}
      onShowPassword={() => setShowPassword(!showPassword)}
      showPassword={showPassword}
      userEmail={userEmail}
      setUserEmail={setUserEmail}
    />
  );
};

export default AuthPages;
