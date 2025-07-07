// DefendoDoge/api-integration/src/services/tokenScannerService.js
const { API_KEYS, API_ENDPOINTS } = require('../utils/apiConfig');
const axios = require('axios'); // Ensure axios is installed: npm install axios

async function scanToken(tokenAddress) {
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.defendoDogeBase}/token/scan`,
            { address: tokenAddress },
            {
                headers: {
                    'X-API-Key': API_KEYS.defendoDoge,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error in Token Scanner Service:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    scanToken
};