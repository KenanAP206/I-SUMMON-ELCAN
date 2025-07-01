import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRefresh = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99,102,241,0.2) 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-12">
            <h1 className="text-8xl md:text-9xl font-black text-gray-900 dark:text-white mb-4 select-none">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-indigo-600 dark:text-indigo-400 opacity-20 blur-sm animate-pulse">
              404
            </div>
          </div>

          <div className="mb-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we'll help you get back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 min-w-[140px] shadow-sm hover:shadow-md"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Go Back
            </button>
            
            <button 
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 min-w-[140px] shadow-sm hover:shadow-md"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Home Page
            </button>
            
            <button 
              className={`group bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 min-w-[140px] shadow-sm hover:shadow-md ${isAnimating ? 'animate-pulse' : ''}`}
              onClick={handleRefresh}
            >
              <RefreshCw className={`w-4 h-4 transition-transform ${isAnimating ? 'animate-spin' : 'group-hover:rotate-90'}`} />
              Refresh
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              What can you do?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Home className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Return to homepage and start fresh
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Go back to the previous page
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Try refreshing the current page
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            Error Code: 404 | Page Not Found
          </p>
        </div>
      </div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-3xl" />
    </div>
  );
}