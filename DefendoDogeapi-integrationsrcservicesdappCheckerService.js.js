// DefendoDoge/api-integration/src/services/dappCheckerService.js
const { API_KEYS, API_ENDPOINTS } = require('../utils/apiConfig');
const axios = require('axios');

async function checkDApp(contractAddress) {
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.defendoDogeBase}/dapp/check`,
            { contractAddress: contractAddress },
            {
                headers: {
                    'X-API-Key': API_KEYS.defendoDoge,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error in DApp Checker Service:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    checkDApp
};