/**
 * Simple News App
 * A React Native application that fetches and displays news from GNews API
 * 
 * Features:
 * - Fetch and display news articles
 * - Search by keywords, title, description, or content
 * - View detailed article information
 * - Navigate to full article in browser
 * 
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

function App(): React.JSX.Element {
  return <AppNavigator />;
}

export default App;

