# API Integration Guide

## GNews API Setup

### Getting Your API Key

1. Go to [GNews.io](https://gnews.io/)
2. Click "Get API Key" or "Sign Up"
3. Create a free account
4. Your API key will be displayed in the dashboard
5. Copy the API key

### Configuring the App

1. Create a `.env` file in the project root (if not already present)
2. Add your API key:
   ```
   GNEWS_API_KEY=your_api_key_here
   GNEWS_API_URL=https://gnews.io/api/v4
   ```
3. Save the file

### API Endpoints Used

#### Top Headlines
- **Endpoint**: `/top-headlines`
- **Purpose**: Fetch the latest news articles
- **Parameters**:
  - `token`: Your API key (required)
  - `max`: Maximum number of articles (default: 10, max: 100)
  - `lang`: Language code (default: 'en')

#### Search
- **Endpoint**: `/search`
- **Purpose**: Search for specific news articles
- **Parameters**:
  - `token`: Your API key (required)
  - `q`: Search query (required)
  - `in`: Search in specific fields ('title', 'description', 'content')
  - `max`: Maximum number of results (default: 10, max: 100)
  - `lang`: Language code (default: 'en')

### Rate Limits

Free tier limits:
- 100 requests per day
- Articles up to 3 days old

For higher limits, consider upgrading to a paid plan.

### Error Handling

The app handles the following API errors:

1. **Invalid API Key**: "API key not configured"
2. **Network Errors**: "Network error. Please check your connection"
3. **Rate Limiting**: API will return appropriate error message
4. **Empty Results**: Shows "No articles found"

### Best Practices

- Never commit your `.env` file with actual API keys
- Use `.env.example` as a template
- Keep your API key secure
- Monitor your usage in the GNews dashboard
