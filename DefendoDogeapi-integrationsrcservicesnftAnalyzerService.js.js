// DefendoDoge/api-integration/src/services/nftAnalyzerService.js
const { API_KEYS, API_ENDPOINTS } = require('../utils/apiConfig');
const axios = require('axios');

async function analyzeNFTCollection(collectionAddress) {
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.defendoDogeBase}/nft/analyze`,
            { address: collectionAddress },
            {
                headers: {
                    'X-API-Key': API_KEYS.defendoDoge,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error in NFT Analyzer Service:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    analyzeNFTCollection
};