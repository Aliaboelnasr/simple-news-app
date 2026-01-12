import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Article } from '../types/news';

interface NewsItemProps {
  article: Article;
  onPress: (article: Article) => void;
}

/**
 * NewsItem Component
 * Displays individual news article with image, title, and description
 */
const NewsItem: React.FC<NewsItemProps> = ({ article, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(article)}
      activeOpacity={0.7}>
      {/* Article Image */}
      {article.image && (
        <Image
          source={{ uri: article.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Article Content */}
      <View style={styles.content}>
        {/* Source Name */}
        <Text style={styles.source} numberOfLines={1}>
          {article.source.name}
        </Text>

        {/* Article Title */}
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>

        {/* Article Description */}
        <Text style={styles.description} numberOfLines={3}>
          {article.description}
        </Text>

        {/* Published Date */}
        <Text style={styles.date}>
          {new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#e1e1e1',
  },
  content: {
    padding: 15,
  },
  source: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default NewsItem;
