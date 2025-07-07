// examples/token_scanner_example.js

/**
 * Example of using the Token Scanner API with Fetch.
 * Scans a specific token for security risks.
 */

const TOKEN_ADDRESS = '0x123...abc'; // Example: Token contract address
const API_ENDPOINT = 'https://api.defendodoge.com/v1/token/scan'; // Example: Our API endpoint
const YOUR_API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

async function scanToken(tokenAddress) {
    try {
        console.log(`Scanning token: ${tokenAddress}...`);
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': YOUR_API_KEY // Custom header for API key
            },
            body: JSON.stringify({ address: tokenAddress })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Token Scan Results:');
        console.log(JSON.stringify(data, null, 2));

        if (data.isScam) {
            console.warn(`WARNING: This token (${tokenAddress}) is likely a scam!`);
        } else {
            console.info(`INFO: This token (${tokenAddress}) appears safe, but always do your own research.`);
        }

    } catch (error) {
        console.error('Error scanning token:', error);
    }
}

// Run the example
scanToken(TOKEN_ADDRESS);