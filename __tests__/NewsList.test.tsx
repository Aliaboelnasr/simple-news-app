/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import NewsList from '../src/components/NewsList';

describe('NewsList', () => {
  const mockArticles = [
    {
      title: 'Article 1',
      description: 'Description 1',
      content: 'Content 1',
      url: 'https://example.com/1',
      image: 'https://example.com/image1.jpg',
      publishedAt: '2024-01-15T10:00:00Z',
      source: { name: 'Source 1', url: 'https://example.com' },
    },
    {
      title: 'Article 2',
      description: 'Description 2',
      content: 'Content 2',
      url: 'https://example.com/2',
      image: 'https://example.com/image2.jpg',
      publishedAt: '2024-01-16T10:00:00Z',
      source: { name: 'Source 2', url: 'https://example.com' },
    },
  ];

  const mockOnRefresh = jest.fn();
  const mockOnArticlePress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <NewsList
          articles={[]}
          loading={true}
          onRefresh={mockOnRefresh}
          onArticlePress={mockOnArticlePress}
        />
      );
    });
  });

  it('renders error state', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <NewsList
          articles={[]}
          loading={false}
          onRefresh={mockOnRefresh}
          onArticlePress={mockOnArticlePress}
          error="Network error"
        />
      );
    });
  });

  it('renders empty state', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <NewsList
          articles={[]}
          loading={false}
          onRefresh={mockOnRefresh}
          onArticlePress={mockOnArticlePress}
        />
      );
    });
  });

  it('renders articles list', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <NewsList
          articles={mockArticles}
          loading={false}
          onRefresh={mockOnRefresh}
          onArticlePress={mockOnArticlePress}
        />
      );
    });
  });
});
