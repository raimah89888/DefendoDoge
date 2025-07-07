// DefendoDoge/api-integration/src/services/teamCommunityCheckerService.js
const { API_KEYS, API_ENDPOINTS } = require('../utils/apiConfig');
const axios = require('axios');

async function checkTeamAndCommunity(projectName, socialLinks) {
    try {
        const response = await axios.post(
            `${API_ENDPOINTS.defendoDogeBase}/project/check-team-community`,
            { projectName: projectName, socialLinks: socialLinks },
            {
                headers: {
                    'X-API-Key': API_KEYS.defendoDoge,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error in Team & Community Checker Service:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    checkTeamAndCommunity
};