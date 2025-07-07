// DefendoDoge/api-integration/src/services/web3PhishingDetectorService.js
const { API_KEYS, API_ENDPOINTS } = require('../utils/apiConfig');
const axios = require('axios');

async function detectPhishing(websiteUrl) {
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.defendoDogeBase}/website/detect-phishing`,
            { url: websiteUrl },
            {
                headers: {
                    'X-API-Key': API_KEYS.defendoDoge,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error in Web3 Phishing Detector Service:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    detectPhishing
};