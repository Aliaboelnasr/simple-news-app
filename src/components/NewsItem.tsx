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
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#e8e8e8',
  },
  content: {
    padding: 16,
  },
  source: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 6,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
    lineHeight: 26,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
});

export default NewsItem;
