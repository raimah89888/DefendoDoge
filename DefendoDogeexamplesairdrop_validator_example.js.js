// examples/airdrop_validator_example.js

/**
 * Example of using the Airdrop Validator API with Axios.
 * Validates the legitimacy of an airdrop campaign.
 */

const axios = require('axios'); // Ensure axios is installed: npm install axios

const AIRDROP_URL = 'https://example.com/fake-airdrop'; // Example: Airdrop campaign link
const API_ENDPOINT = 'https://api.defendodoge.com/v1/airdrop/validate'; // Example: Our API endpoint
const YOUR_API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

async function validateAirdrop(airdropUrl) {
    try {
        console.log(`Validating airdrop URL: ${airdropUrl}...`);
        const response = await axios.post(API_ENDPOINT, { url: airdropUrl }, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': YOUR_API_KEY
            }
        });

        console.log('Airdrop Validation Results:');
        console.log(JSON.stringify(response.data, null, 2));

        if (response.data.isLegitimate) {
            console.info(`INFO: This airdrop (${airdropUrl}) appears legitimate.`);
        } else {
            console.warn(`WARNING: This airdrop (${airdropUrl}) is suspicious or a known scam!`);
        }

    } catch (error) {
        if (error.response) {
            // Server response error
            console.error('Error validating airdrop (server response):', error.response.status, error.response.data);
        } else if (error.request) {
            // No response received
            console.error('Error validating airdrop (no response):', error.request);
        } else {
            // Other error
            console.error('Error validating airdrop:', error.message);
        }
    }
}

// Run the example
validateAirdrop(AIRDROP_URL);