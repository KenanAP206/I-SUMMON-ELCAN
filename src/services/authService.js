import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

// Create axios instance with default settings
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('Sending request to:', config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.data);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const authService = {
  // Login user
  login: async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Register new user
  register: async (email, password, name) => {
    try {
      const response = await api.post('/register', { email, password, name });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Verify email
  verify: async (email, code) => {
    try {
      const response = await api.post('/verify', { email, code });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Verification failed');
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const response = await api.post('/reset-password', { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Password reset failed');
    }
  }
};

export default authService;

  // Register new user
  register: async (email, password, name) => {
    try {
      const response = await api.post('/register', { email, password, name });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Verify email
  verify: async (email, code) => {
    try {
      const response = await api.post('/verify', { email, code });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Verification failed');
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const response = await api.post('/reset-password', { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Password reset failed');
    }
  }
};
