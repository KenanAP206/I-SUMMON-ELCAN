import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const AuthForm = ({ 
  title, 
  subtitle, 
  onSubmit, 
  fields, 
  buttonText,
  bgColor = 'from-blue-50 to-indigo-100'
}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} flex items-center justify-center p-4`}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div key={field.name} className="space-y-1">
              <input
                type={field.type === 'password' && showPassword ? 'text' : field.type}
                placeholder={field.placeholder}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className={`w-full px-4 py-3 border ${
                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
              />
              {errors[field.name] && (
                <div className="text-red-500 text-sm">{errors[field.name]}</div>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Yükleniyor...' : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
