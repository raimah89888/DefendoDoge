# examples/dapp_checker_example.sh

# Example of using the DApp Checker API with cURL.
# Checks a DApp smart contract.

CONTRACT_ADDRESS="0xabc...def" # Example: DApp smart contract address
API_ENDPOINT="https://api.defendodoge.com/v1/dapp/check" # Example: Our API endpoint
YOUR_API_KEY="YOUR_API_KEY" # Replace with your actual API key

echo "Checking DApp contract: ${CONTRACT_ADDRESS}..."

curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-API-Key: ${YOUR_API_KEY}" \
     -d "{ \"contractAddress\": \"${CONTRACT_ADDRESS}\" }" \
     "${API_ENDPOINT}" | python3 -m json.tool

echo "Please review the JSON output for DApp security analysis."