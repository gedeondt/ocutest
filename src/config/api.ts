const getApiBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    const currentHost = window.location.hostname;
    const isReplit = currentHost.includes('replit.dev') || currentHost.includes('repl.co');
    
    if (isReplit) {
      return `https://${currentHost}`.replace(':5000', ':3000');
    }
  }
  
  return 'http://localhost:3000';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  googleTrends: `${API_BASE_URL}/api/trends/google-trends`,
  keywordPlanner: `${API_BASE_URL}/api/trends/keyword-planner`,
  tematicas: `${API_BASE_URL}/api/tematicas`,
  health: `${API_BASE_URL}/health`,
};
