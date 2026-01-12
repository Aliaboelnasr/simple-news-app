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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 6,
  },
  clearText: {
    fontSize: 20,
    color: '#999',
    fontWeight: 'bold',
  },
  filterContainer: {
    marginBottom: 14,
  },
  filterLabel: {
    fontSize: 13,
    color: '#555',
    marginBottom: 10,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1.5,
    borderColor: '#d8d8d8',
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filterButtonText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButtonDisabled: {
    backgroundColor: '#ccc',
    shadowOpacity: 0,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default SearchBar;
