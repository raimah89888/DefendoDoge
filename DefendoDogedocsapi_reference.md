**b. `DefendoDoge/docs/api_reference.md`**
(Content translated)

```markdown
# API Reference - DefendoDoge

This document provides an overview of the Application Programming Interface (API) endpoints used and provided by DefendoDoge.

## Internal DefendoDoge API Endpoints

These are the endpoints that you will host as a backend service for your DefendoDoge project.

**Base URL:** `https://api.defendodoge.com/v1` (Example, you can host your API anywhere)

### 1. Token Scanner

* **Description:** Analyzes a cryptocurrency token for signs of fraud and security vulnerabilities.
* **Endpoint:** `/token/scan`
* **Method:** `POST`
* **Body:**
    ```json
    {
        "address": "0x..." // Token contract address (ERC-20, BEP-20, etc.)
    }
    ```
* **Headers:**
    * `Content-Type: application/json`
    * `X-API-Key: YOUR_DEFENDODOGE_API_KEY` (API key for authenticating frontend/service requests)
* **Response:**
    ```json
    {
        "address": "0x...",
        "name": "Example Token",
        "symbol": "EXT",
        "isScam": true,
        "scamType": "Honeypot",
        "riskScore": 9.5, // From 0 to 10
        "warnings": ["High sell tax", "Unverified contract"],
        "analysisDetails": { /* additional technical details */ }
    }
    ```

### 2. NFT Analyzer

* **Description:** Evaluates an NFT collection for legitimacy and risks.
* **Endpoint:** `/nft/analyze`
* **Method:** `POST`
* **Body:**
    ```json
    {
        "address": "0x..." // NFT collection contract address
    }
    ```
* **Headers:**
    * `Content-Type: application/json`
    * `X-API-Key: YOUR_DEFENDODOGE_API_KEY`
* **Response:**
    ```json
    {
        "collectionAddress": "0x...",
        "collectionName": "Bored Ape Yacht Club",
        "potentialRugPull": false,
        "ownerAnalysis": { /* details about the contract owner */ },
        "communitySentiment": "Positive",
        "riskScore": 2.1,
        "warnings": []
    }
    ```

### 3. DApp Checker

* **Description:** Inspects DApp smart contracts for vulnerabilities and risks.
* **Endpoint:** `/dapp/check`
* **Method:** `POST`
* **Body:**
    ```json
    {
        "contractAddress": "0x..." // DApp smart contract address
    }
    ```
* **Headers:**
    * `Content-Type: application/json`
    * `X-API-Key: YOUR_DEFENDODOGE_API_KEY`
* **Response:**
    ```json
    {
        "contractAddress": "0x...",
        "securityScore": 8.8,
        "vulnerabilities": ["Reentrancy risk", "Unchecked external calls"],
        "audits": ["Certik (verified)"],
        "isVerified": true,
        "recommendations": ["Implement reentrancy guard"]
    }
    ```

### 4. Airdrop Validator

* **Description:** Verifies the legitimacy of airdrop campaigns and helps avoid scams.
* **Endpoint:** `/airdrop/validate`
* **Method:** `POST`
* **Body:**
    ```json
    {
        "url": "[https://example-airdrop.com](https://example-airdrop.com)" // Link to the airdrop page or registration form
    }
    ```
* **Headers:**
    * `Content-Type: application/json`
    * `X-API-Key: YOUR_DEFENDODOGE_API_KEY`
* **Response:**
    ```json
    {
        "url": "[https://example-airdrop.com](https://example-airdrop.com)",
        "isLegitimate": false,
        "reason": "Known phishing domain",
        "associatedWallets": ["0x..."],
        "warnings": ["Requests private key", "Unrealistic returns"]
    }
    ```

### 5. Team & Community Checker

* **Description:** Assesses the credibility of a project's team and community activity.
* **Endpoint:** `/project/check-team-community`
* **Method:** `POST`
* **Body:**
    ```json
    {
        "projectName": "Example Coin",
        "socialLinks": {
            "twitter": "[https://twitter.com/examplecoin](https://twitter.com/examplecoin)",
            "telegram": "[https://t.me/examplecoin_official](https://t.me/examplecoin_official)",
            "discord": "[https://discord.gg/examplecoin](https://discord.gg/examplecoin)"
        },
        "teamMembers": ["John Doe", "Jane Smith"] // Optional
    }
    ```
* **Headers:**
    * `Content-Type: application/json`
    * `X-API-Key: YOUR_DEFENDODOGE_API_KEY`
* **Response:**
    ```json
    {
        "projectName": "Example Coin",
        "redFlagsDetected": true,
        "details": {
            "teamTransparency": "Low",
            "communityActivity": "Fake engagement suspected",
            "socialMediaAnalysis": "Low follower-to-engagement ratio"
        }
    }
    ```

### 6. Web3 Site Phishing Detector

* **Description:** Identifies phishing websites attempting to steal user credentials or private keys.
* **Endpoint:** `/website/detect-phishing`
* **Method:** `POST`
* **Body:**
    ```json
    {
        "url": "[https://malicious-site.xyz](https://malicious-site.xyz)" // URL of the website to check
    }
    ```
* **Headers:**
    * `Content-Type: application/json`
    * `X-API-Key: YOUR_DEFENDODOGE_API_KEY`
* **Response:**
    ```json
    {
        "url": "[https://malicious-site.xyz](https://malicious-site.xyz)",
        "isPhishing": true,
        "phishingType": "Wallet connect impersonation",
        "threatScore": 9.8,
        "warnings": ["Asks for seed phrase", "Fake domain name similarity"]
    }
    ```