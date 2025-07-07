# examples/team_community_checker_example.py

"""
Example of using the Team & Community Checker API with Python's Requests library.
Evaluates a specific project's team and community activity.
"""

import requests
import json

PROJECT_NAME = "DefendoDoge"  # Example: Project name
SOCIAL_LINKS = {
    "twitter": "https://twitter.com/defendodoge",
    "telegram": "https://t.me/defendodogecommunity",
    "reddit": "https://www.reddit.com/r/defendodoge/"
}
API_ENDPOINT = "https://api.defendodoge.com/v1/project/check-team-community"
YOUR_API_KEY = "YOUR_API_KEY"

def check_team_community(project_name, social_links):
    print(f"Checking team and community for project: {project_name}...")
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": YOUR_API_KEY,
    }
    data = {
        "projectName": project_name,
        "socialLinks": social_links
    }

    try:
        response = requests.post(API_ENDPOINT, headers=headers, data=json.dumps(data))
        response.raise_for_status()
        results = response.json()

        print("Team & Community Check Results:")
        print(json.dumps(results, indent=2))

        if results.get("redFlagsDetected"):
            print(f"WARNING: Red flags detected for {project_name}'s team or community. Exercise caution!")
        else:
            print(f"INFO: No major red flags found for {project_name}'s team and community. Still, do your own research.")

    except requests.exceptions.RequestException as e:
        print(f"Error checking team/community: {e}")

# Run the example
if __name__ == "__main__":
    check_team_community(PROJECT_NAME, SOCIAL_LINKS)