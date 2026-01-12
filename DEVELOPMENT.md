# Development Guide

## Code Structure

### Components (`src/components/`)

#### NewsItem.tsx
Displays individual news article with:
- Article image
- Source name
- Title
- Description
- Publication date
- Touch interaction to view details

#### NewsList.tsx
Manages list of articles with:
- FlatList for efficient scrolling
- Pull-to-refresh functionality
- Loading state
- Error state
- Empty state

#### SearchBar.tsx
Provides search functionality with:
- Text input for search query
- Filter options (title, description, content)
- Clear button
- Search button

### Screens (`src/screens/`)

#### HomeScreen.tsx
Main application screen:
- Fetches top headlines on mount
- Displays SearchBar
- Displays NewsList
- Handles search functionality
- Manages loading/error states

#### ArticleDetailScreen.tsx
Detail view for articles:
- Full article information
- Large article image
- Complete description and content
- "Read Full Article" button to open in browser
- Back navigation

### Services (`src/services/`)

#### newsService.ts
API integration layer:
- Axios instance with base configuration
- API key validation
- Error interceptors
- Methods:
  - `getTopHeadlines()`: Fetch latest news
  - `searchArticles()`: Search with filters
  - `searchByKeywords()`: Simple keyword search
  - `searchInFields()`: Search in specific fields

### Navigation (`src/navigation/`)

#### AppNavigator.tsx
React Navigation setup:
- Stack Navigator
- Routes:
  - Home (main screen)
  - ArticleDetail (detail view)
- Type-safe navigation with TypeScript

### Types (`src/types/`)

#### news.ts
TypeScript definitions:
- `Article`: Article data structure
- `GNewsResponse`: API response format
- `SearchParams`: Search parameters

## Adding New Features

### Adding a New Component

1. Create file in `src/components/`
2. Define TypeScript interface for props
3. Implement component with functional React
4. Export as default
5. Import and use in screens

Example:
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MyComponent;
```

### Adding a New Screen

1. Create file in `src/screens/`
2. Implement screen component
3. Add route in `AppNavigator.tsx`
4. Update navigation types

### Adding API Features

1. Add method to `newsService.ts`
2. Update types if needed
3. Handle errors appropriately
4. Use in screens/components

## Testing

### Running Tests

```bash
npm test
```

### Adding Tests

Create test file: `__tests__/ComponentName.test.tsx`

Example:
```typescript
import React from 'react';
import { render } from '@testing-library/react-native';
import MyComponent from '../src/components/MyComponent';

test('renders correctly', () => {
  const { getByText } = render(<MyComponent title="Test" />);
  expect(getByText('Test')).toBeTruthy();
});
```

## Styling Guidelines

- Use StyleSheet.create for styles
- Follow Material Design/iOS guidelines
- Use consistent spacing (8px grid system)
- Colors:
  - Primary: #007AFF (blue)
  - Error: #d32f2f (red)
  - Text: #333 (dark gray)
  - Secondary text: #666, #999
  - Background: #fff, #f5f5f5

## Common Tasks

### Updating Dependencies

```bash
npm update
npm audit fix
```

### Clearing Cache

```bash
npm start -- --reset-cache
```

### Building for Production

#### Android
```bash
cd android
./gradlew assembleRelease
```

#### iOS
```bash
cd ios
xcodebuild -workspace SimpleNewsApp.xcworkspace -scheme SimpleNewsApp -configuration Release
```

## Debugging

### React Native Debugger

1. Start Metro: `npm start`
2. Open app in simulator/device
3. Shake device or press Cmd+D (iOS) / Cmd+M (Android)
4. Select "Debug"

### Console Logging

```typescript
console.log('Debug message');
console.error('Error message');
```

### Network Debugging

Check API calls in:
- Chrome DevTools (Network tab)
- React Native Debugger
- Console logs in newsService.ts
