import { API_ENDPOINTS } from '../config/api';

export interface TrendDataPoint {
  fecha: string;
  [key: string]: string | number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  metadata?: {
    source: string;
    dateRange?: string;
    lang?: string;
  };
}

export const trendsService = {
  async getGoogleTrends(lang: string = 'es'): Promise<TrendDataPoint[]> {
    try {
      const response = await fetch(`${API_ENDPOINTS.googleTrends}?lang=${lang}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<TrendDataPoint[]> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error fetching Google Trends data:', error);
      return [];
    }
  },

  async getKeywordPlanner(lang: string = 'es'): Promise<TrendDataPoint[]> {
    try {
      const response = await fetch(`${API_ENDPOINTS.keywordPlanner}?lang=${lang}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<TrendDataPoint[]> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error fetching Keyword Planner data:', error);
      return [];
    }
  },
};
