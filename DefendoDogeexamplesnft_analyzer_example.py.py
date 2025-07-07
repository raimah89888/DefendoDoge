# examples/nft_analyzer_example.py

"""
Example of using the NFT Analyzer API with Python's Requests library.
Analyzes a specific NFT collection.
"""

import requests
import json

COLLECTION_ADDRESS = "0xdef...ghi"  # Example: NFT collection contract address
API_ENDPOINT = "https://api.defendodoge.com/v1/nft/analyze"  # Example: Our API endpoint
YOUR_API_KEY = "YOUR_API_KEY"  # Replace with your actual API key

def analyze_nft_collection(collection_address):
    print(f"Analyzing NFT collection: {collection_address}...")
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": YOUR_API_KEY,  # Custom header for API key
    }
    data = {
        "address": collection_address
    }

    try:
        response = requests.post(API_ENDPOINT, headers=headers, data=json.dumps(data))
        response.raise_for_status()  # Raise an exception for HTTP 4xx/5xx status codes
        results = response.json()

        print("NFT Analysis Results:")
        print(json.dumps(results, indent=2))

        if results.get("potentialRugPull"):
            print(f"WARNING: Potential rug pull detected for this NFT collection ({collection_address})!")
        else:
            print(f"INFO: This NFT collection ({collection_address}) appears legitimate. Always do your own research.")

    except requests.exceptions.RequestException as e:
        print(f"Error analyzing NFT collection: {e}")

# Run the example
if __name__ == "__main__":
    analyze_nft_collection(COLLECTION_ADDRESS)