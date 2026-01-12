import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Article } from '../types/news';

interface ArticleDetailScreenProps {
  route: {
    params: {
      article: Article;
    };
  };
  navigation: any;
}

/**
 * Article Detail Screen
 * Displays full article details with option to open in browser
 */
const ArticleDetailScreen: React.FC<ArticleDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { article } = route.params;

  /**
   * Open article URL in browser
   */
  const openArticle = async () => {
    try {
      const supported = await Linking.canOpenURL(article.url);
      if (supported) {
        await Linking.openURL(article.url);
      }
    } catch (err) {
      console.error('Error opening URL:', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
          <Text style={styles.source}>{article.source.name}</Text>

          {/* Article Title */}
          <Text style={styles.title}>{article.title}</Text>

          {/* Published Date */}
          <Text style={styles.date}>
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>

          {/* Article Description */}
          <Text style={styles.description}>{article.description}</Text>

          {/* Article Content */}
          <Text style={styles.articleContent}>{article.content}</Text>

          {/* Read More Button */}
          <TouchableOpacity style={styles.readMoreButton} onPress={openArticle}>
            <Text style={styles.readMoreText}>Read Full Article →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  backButton: {
    paddingVertical: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#e1e1e1',
  },
  content: {
    padding: 20,
  },
  source: {
    fontSize: 13,
    color: '#007AFF',
    marginBottom: 8,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    lineHeight: 32,
  },
  date: {
    fontSize: 13,
    color: '#999',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: '500',
  },
  articleContent: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
    marginBottom: 30,
  },
  readMoreButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ArticleDetailScreen;
