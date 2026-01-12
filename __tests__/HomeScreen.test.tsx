/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';

// Mock the navigation prop
const mockNavigation = {
  navigate: jest.fn(),
};

// Mock the newsService
jest.mock('../src/services/newsService', () => ({
  __esModule: true,
  default: {
    getTopHeadlines: jest.fn(() => Promise.resolve({
      totalArticles: 2,
      articles: [
        {
          title: 'Test Article 1',
          description: 'Test Description 1',
          content: 'Test Content 1',
          url: 'https://example.com/1',
          image: 'https://example.com/image1.jpg',
          publishedAt: '2024-01-01T00:00:00Z',
          source: {
            name: 'Test Source',
            url: 'https://example.com',
          },
        },
        {
          title: 'Test Article 2',
          description: 'Test Description 2',
          content: 'Test Content 2',
          url: 'https://example.com/2',
          image: 'https://example.com/image2.jpg',
          publishedAt: '2024-01-02T00:00:00Z',
          source: {
            name: 'Test Source 2',
            url: 'https://example.com',
          },
        },
      ],
    })),
    searchInFields: jest.fn(() => Promise.resolve({
      totalArticles: 1,
      articles: [],
    })),
  },
}));

describe('HomeScreen', () => {
  it('renders correctly with header', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <HomeScreen navigation={mockNavigation} />
      );
    });
  });
});
