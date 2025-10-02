// Configuration file for API endpoints
// Use environment variable in production, fallback to localhost for development
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://uber-backend-api-1.onrender.com';

// Debug log to see what URL is being used
console.log('API_BASE_URL:', API_BASE_URL);
console.log('Environment variable:', import.meta.env.VITE_API_BASE_URL);
