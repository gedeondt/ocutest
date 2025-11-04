// In development, use Vite proxy (empty string for relative URLs)
// In production, use environment variable or construct with port 3000
const getApiBaseUrl = (): string => {
  // Check if we're in development mode
  if (import.meta.env.DEV) {
    return ''; // Use Vite proxy in development
  }
  
  // In production, allow env override or use port 3000
  const envBackendUrl = import.meta.env.VITE_BACKEND_URL;
  if (envBackendUrl) {
    return envBackendUrl;
  }
  
  // Default production: backend on same host, port 3000
  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    return `${protocol}//${hostname}:3000`;
  }
  
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  googleTrends: `${API_BASE_URL}/api/trends/google-trends`,
  keywordPlanner: `${API_BASE_URL}/api/trends/keyword-planner`,
  tematicas: `${API_BASE_URL}/api/tematicas`,
  health: `${API_BASE_URL}/health`,
};
