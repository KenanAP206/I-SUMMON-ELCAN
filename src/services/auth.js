import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Giriş başarısız');
    }
  },

  register: async (email, password, name) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password, name });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Kayıt başarısız');
    }
  },

  verify: async (email, code) => {
    try {
      const response = await axios.post(`${API_URL}/verify`, { email, code });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Doğrulama başarısız');
    }
  },

  resetPassword: async (email) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Şifre sıfırlama başarısız');
    }
  }
};
