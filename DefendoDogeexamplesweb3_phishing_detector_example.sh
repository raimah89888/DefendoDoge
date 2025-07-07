# examples/web3_phishing_detector_example.sh

# Example of using the Web3 Site Phishing Detector API with cURL.
# Checks if a specific Web3 website is a phishing site.

WEBSITE_URL="https://malicious-defendodoge.xyz" # Example: Suspicious website link
API_ENDPOINT="https://api.defendodoge.com/v1/website/detect-phishing" # Example: Our API endpoint
YOUR_API_KEY="YOUR_API_KEY" # Replace with your actual API key

echo "Detecting phishing for website: ${WEBSITE_URL}..."

curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-API-Key: ${YOUR_API_KEY}" \
     -d "{ \"url\": \"${WEBSITE_URL}\" }" \
     "${API_ENDPOINT}" | python3 -m json.tool

echo "Please review the JSON output for phishing detection results."