// Configuration file for API endpoints
// Hardcoded for now until Vercel env variable is fixed
export const API_BASE_URL = 'https://uber-backend-api-1.onrender.com';

// Debug log to see what URL is being used
console.log('API_BASE_URL:', API_BASE_URL);
console.log('Environment variable (raw):', import.meta.env.VITE_API_BASE_URL);
console.log('Environment variable (trimmed):', import.meta.env.VITE_API_BASE_URL?.trim());
