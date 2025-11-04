import { API_ENDPOINTS } from '../config/api';

export interface TematicaData {
  tema: string;
  busquedas: number;
  crecimiento: string;
  color: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  metadata?: {
    source: string;
    lang?: string;
  };
}

export const tematicasService = {
  async getTematicas(lang: string = 'es'): Promise<TematicaData[]> {
    try {
      const response = await fetch(`${API_ENDPOINTS.tematicas}?lang=${lang}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<TematicaData[]> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error fetching Tematicas data:', error);
      return [];
    }
  },
};
