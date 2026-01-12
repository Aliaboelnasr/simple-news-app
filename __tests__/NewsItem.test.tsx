/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import NewsItem from '../src/components/NewsItem';

describe('NewsItem', () => {
  const mockArticle = {
    title: 'Test Article Title',
    description: 'Test article description',
    content: 'Test article content',
    url: 'https://example.com/article',
    image: 'https://example.com/image.jpg',
    publishedAt: '2024-01-15T10:00:00Z',
    source: {
      name: 'Test Source',
      url: 'https://example.com',
    },
  };

  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <NewsItem article={mockArticle} onPress={mockOnPress} />
      );
    });
  });

  it('renders without image', async () => {
    const articleWithoutImage = { ...mockArticle, image: '' };
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <NewsItem article={articleWithoutImage} onPress={mockOnPress} />
      );
    });
  });
});
