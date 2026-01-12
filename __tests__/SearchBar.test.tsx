/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import SearchBar from '../src/components/SearchBar';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <SearchBar onSearch={mockOnSearch} />
      );
    });
  });

  it('renders with custom placeholder', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(
        <SearchBar onSearch={mockOnSearch} placeholder="Test placeholder" />
      );
    });
  });
});
