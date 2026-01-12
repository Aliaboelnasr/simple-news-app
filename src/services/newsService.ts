import axios, { AxiosInstance } from 'axios';
import { GNEWS_API_KEY, GNEWS_API_URL } from '@env';
import { GNewsResponse, SearchParams } from '../types/news';

/**
 * GNews API Service
 * Handles all API calls to GNews API for fetching and searching news articles
 */
class GNewsService {
  private api: AxiosInstance;
  private apiKey: string;

  constructor() {
    this.apiKey = GNEWS_API_KEY;
    
    // Create axios instance with base configuration
    this.api = axios.create({
      baseURL: GNEWS_API_URL || 'https://gnews.io/api/v4',
      timeout: 10000,
    });

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          // Server responded with error status
          const message = error.response.data?.errors?.[0] || 'API request failed';
          throw new Error(message);
        } else if (error.request) {
          // Request made but no response received
          throw new Error('Network error. Please check your connection.');
        } else {
          // Error in request setup
          throw new Error('Request error: ' + error.message);
        }
      }
    );
  }

  /**
   * Validate API key is configured
   */
  private validateApiKey(): void {
    if (!this.apiKey || this.apiKey === 'your_api_key_here') {
      throw new Error('API key not configured. Please set GNEWS_API_KEY in .env file');
    }
  }

  /**
   * Fetch top headlines
   * @param max Maximum number of articles to fetch (default: 10)
   * @param lang Language code (default: 'en')
   */
  async getTopHeadlines(max: number = 10, lang: string = 'en'): Promise<GNewsResponse> {
    this.validateApiKey();
    
    try {
      const response = await this.api.get('/top-headlines', {
        params: {
          token: this.apiKey,
          max,
          lang,
        },
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  }

  /**
   * Search for news articles
   * @param searchParams Search parameters including query, filters, etc.
   */
  async searchArticles(searchParams: SearchParams): Promise<GNewsResponse> {
    this.validateApiKey();
    
    try {
      const params: any = {
        token: this.apiKey,
        ...searchParams,
      };

      // Default values
      if (!params.max) params.max = 10;
      if (!params.lang) params.lang = 'en';

      const response = await this.api.get('/search', {
        params,
      });
      
      return response.data;
    } catch (error) {
      console.error('Error searching articles:', error);
      throw error;
    }
  }

  /**
   * Search by keywords
   * @param query Search query string
   * @param max Maximum number of results
   */
  async searchByKeywords(query: string, max: number = 10): Promise<GNewsResponse> {
    return this.searchArticles({
      q: query,
      max,
    });
  }

  /**
   * Search in specific fields (title, description, content)
   * @param query Search query string
   * @param searchIn Fields to search in ('title', 'description', 'content')
   * @param max Maximum number of results
   */
  async searchInFields(query: string, searchIn: string = 'title,description', max: number = 10): Promise<GNewsResponse> {
    return this.searchArticles({
      q: query,
      in: searchIn,
      max,
    });
  }
}

// Export singleton instance
export default new GNewsService();
