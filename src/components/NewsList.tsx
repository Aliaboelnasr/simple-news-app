import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Article } from '../types/news';
import NewsItem from './NewsItem';

interface NewsListProps {
  articles: Article[];
  loading: boolean;
  onRefresh: () => void;
  onArticlePress: (article: Article) => void;
  error?: string | null;
}

/**
 * NewsList Component
 * Displays a scrollable list of news articles with pull-to-refresh
 */
const NewsList: React.FC<NewsListProps> = ({
  articles,
  loading,
  onRefresh,
  onArticlePress,
  error,
}) => {
  // Render loading state
  if (loading && articles.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading news...</Text>
      </View>
    );
  }

  // Render error state
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.errorHint}>Pull down to retry</Text>
      </View>
    );
  }

  // Render empty state
  if (articles.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyIcon}>📰</Text>
        <Text style={styles.emptyText}>No articles found</Text>
        <Text style={styles.emptyHint}>Try a different search</Text>
      </View>
    );
  }

  // Render articles list
  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => `${item.url}-${index}`}
      renderItem={({ item }) => (
        <NewsItem article={item} onPress={onArticlePress} />
      )}
      contentContainerStyle={styles.listContent}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
          colors={['#007AFF']}
          tintColor="#007AFF"
        />
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 15,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  errorHint: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  emptyHint: {
    fontSize: 14,
    color: '#999',
  },
});

export default NewsList;
