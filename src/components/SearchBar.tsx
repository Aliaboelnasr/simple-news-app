import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

interface SearchBarProps {
  onSearch: (query: string, searchIn: string) => void;
  placeholder?: string;
}

/**
 * SearchBar Component
 * Allows users to search for news articles by keywords
 * with options to filter by title, description, or content
 */
const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Search news...' 
}) => {
  const [query, setQuery] = useState('');
  const [searchIn, setSearchIn] = useState<'title' | 'description' | 'content'>('title');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim(), searchIn);
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('', 'title'); // Reset search
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Search Filter Options */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Search in:</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[styles.filterButton, searchIn === 'title' && styles.filterButtonActive]}
            onPress={() => setSearchIn('title')}>
            <Text style={[styles.filterButtonText, searchIn === 'title' && styles.filterButtonTextActive]}>
              Title
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, searchIn === 'description' && styles.filterButtonActive]}
            onPress={() => setSearchIn('description')}>
            <Text style={[styles.filterButtonText, searchIn === 'description' && styles.filterButtonTextActive]}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, searchIn === 'content' && styles.filterButtonActive]}
            onPress={() => setSearchIn('content')}>
            <Text style={[styles.filterButtonText, searchIn === 'content' && styles.filterButtonTextActive]}>
              Content
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Button */}
      <TouchableOpacity 
        style={[styles.searchButton, !query.trim() && styles.searchButtonDisabled]}
        onPress={handleSearch}
        disabled={!query.trim()}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 5,
  },
  clearText: {
    fontSize: 18,
    color: '#999',
    fontWeight: 'bold',
  },
  filterContainer: {
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonDisabled: {
    backgroundColor: '#ccc',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SearchBar;
