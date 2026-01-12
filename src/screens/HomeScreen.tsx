import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Article } from '../types/news';
import newsService from '../services/newsService';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

interface HomeScreenProps {
  navigation: any;
}

/**
 * Home Screen
 * Main screen displaying news articles with search functionality
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSearchMode, setIsSearchMode] = useState(false);

  // Fetch top headlines on mount
  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  /**
   * Fetch top headlines from GNews API
   */
  const fetchTopHeadlines = async () => {
    setLoading(true);
    setError(null);
    setIsSearchMode(false);

    try {
      const response = await newsService.getTopHeadlines(20);
      setArticles(response.articles);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch news');
      console.error('Error fetching headlines:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Search for articles based on query and search field
   */
  const handleSearch = async (query: string, searchIn: string) => {
    // If query is empty, fetch top headlines
    if (!query) {
      fetchTopHeadlines();
      return;
    }

    setLoading(true);
    setError(null);
    setIsSearchMode(true);

    try {
      const response = await newsService.searchInFields(query, searchIn, 20);
      setArticles(response.articles);
    } catch (err: any) {
      setError(err.message || 'Search failed');
      console.error('Error searching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle article press - navigate to detail screen
   */
  const handleArticlePress = (article: Article) => {
    navigation.navigate('ArticleDetail', { article });
  };

  /**
   * Handle refresh
   */
  const handleRefresh = () => {
    if (isSearchMode) {
      // In search mode, just re-fetch search results (not implemented here)
      // For simplicity, we'll fetch top headlines
      fetchTopHeadlines();
    } else {
      fetchTopHeadlines();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* News List */}
      <NewsList
        articles={articles}
        loading={loading}
        onRefresh={handleRefresh}
        onArticlePress={handleArticlePress}
        error={error}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
