# Simple News App

A React Native mobile application that fetches, searches, and displays news articles using the GNews API.

## Features

- 📰 Fetch and display news articles from GNews API
- 🔍 Search articles by keywords
- 🎯 Filter search by title, description, or content
- 📱 Beautiful, responsive UI with smooth navigation
- 🔄 Pull-to-refresh functionality
- 📖 Detailed article view with option to open full article in browser
- ⚡ Error handling for API issues and network problems

## Screenshots

[Add your app screenshots here]

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **React Native CLI** (`npm install -g react-native-cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **CocoaPods** (for iOS dependencies, macOS only)

## GNews API Configuration

1. Visit [GNews.io](https://gnews.io/) and sign up for a free account
2. Get your API key from the dashboard
3. Copy `.env.example` to `.env` in the project root
4. Add your API key to the `.env` file:

```env
GNEWS_API_KEY=your_actual_api_key_here
GNEWS_API_URL=https://gnews.io/api/v4
```

⚠️ **Important**: Never commit your `.env` file with actual API keys to version control!

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/Aliaboelnasr/simple-news-app.git
cd simple-news-app
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Install iOS dependencies** (macOS only):
```bash
cd ios
pod install
cd ..
```

4. **Configure your API key**:
   - Copy `.env.example` to `.env`
   - Add your GNews API key to `.env`

## Running the App

### Android

```bash
# Start Metro bundler
npm start

# In a new terminal, run Android app
npm run android
```

Or using React Native CLI directly:
```bash
npx react-native run-android
```

### iOS (macOS only)

```bash
# Start Metro bundler
npm start

# In a new terminal, run iOS app
npm run ios
```

Or using React Native CLI directly:
```bash
npx react-native run-ios
```

## Project Structure

```
simple-news-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── NewsItem.tsx    # Individual news article component
│   │   ├── NewsList.tsx    # List of news articles
│   │   └── SearchBar.tsx   # Search input and filters
│   ├── screens/            # App screens
│   │   ├── HomeScreen.tsx        # Main screen with news list
│   │   └── ArticleDetailScreen.tsx # Detailed article view
│   ├── navigation/         # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── services/           # API and business logic
│   │   └── newsService.ts  # GNews API integration
│   └── types/              # TypeScript type definitions
│       └── news.ts
├── App.tsx                 # Root component
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## API Features Used

The app integrates with GNews API endpoints:

- **Top Headlines**: Fetch latest news articles
- **Search**: Search articles by keywords
- **Filters**: Filter by title, description, or content

## Error Handling

The app handles various error scenarios:

- Invalid or missing API key
- Network connectivity issues
- API rate limiting
- Empty search results
- Failed article loading

## Technologies Used

- **React Native** - Mobile app framework
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Axios** - HTTP client for API calls
- **react-native-dotenv** - Environment variable management

## Troubleshooting

### Metro bundler issues
```bash
# Clear Metro cache
npm start -- --reset-cache
```

### Android build issues
```bash
cd android
./gradlew clean
cd ..
```

### iOS build issues (macOS only)
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### API not working
- Verify your API key is correct in `.env`
- Check that you haven't exceeded API rate limits
- Ensure you have an active internet connection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

Project Link: [https://github.com/Aliaboelnasr/simple-news-app](https://github.com/Aliaboelnasr/simple-news-app)

## Acknowledgments

- [GNews API](https://gnews.io/) for providing the news data
- [React Native](https://reactnative.dev/) for the awesome framework
- [React Navigation](https://reactnavigation.org/) for navigation solution
