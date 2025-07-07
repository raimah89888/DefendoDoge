// DefendoDoge/api-integration/src/utils/apiConfig.js

/**
 * API configuration file.
 * Used to securely define API keys and endpoints.
 */

// To avoid hardcoding API keys, use environment variables.
// In development, you can use a .env file.
// In production, they should be set in the server environment.

const API_KEYS = {
    defendoDoge: process.env.DEFENDODOGE_API_KEY || 'YOUR_DEFENDODOGE_API_KEY',
    etherscan: process.env.ETHERSCAN_API_KEY || 'YOUR_ETHERSCAN_API_KEY',
    moralis: process.env.MORALIS_API_KEY || 'YOUR_MORALIS_API_KEY',
    // Add any other API keys you need here
};

const API_ENDPOINTS = {
    defendoDogeBase: process.env.DEFENDODOGE_BASE_URL || 'https://api.defendodoge.com/v1', // This is a placeholder, actual API might be hosted elsewhere
    // Add API endpoints for external services here
    etherscanBase: 'https://api.etherscan.io/api',
    moralisBase: 'https://deep-index.moralis.io/api/v2',
};

module.exports = {
    API_KEYS,
    API_ENDPOINTS,
};