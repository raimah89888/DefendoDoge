// DefendoDoge/api-integration/src/services/airdropValidatorService.js
const { API_KEYS, API_ENDPOINTS } = require('../utils/apiConfig');
const axios = require('axios');

async function validateAirdrop(airdropUrl) {
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.defendoDogeBase}/airdrop/validate`,
            { url: airdropUrl },
            {
                headers: {
                    'X-API-Key': API_KEYS.defendoDoge,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error in Airdrop Validator Service:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    validateAirdrop
};