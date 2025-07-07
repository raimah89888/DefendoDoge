# Contribution Guide - DefendoDoge

We welcome your contributions to the DefendoDoge project! By following this guide, you can help improve and expand our security toolkit.

## How to Contribute

1.  **Reporting Bugs:**
    If you find a bug, please open a new `Issue` on GitHub. Make sure to describe the bug clearly, provide steps to reproduce it, and specify the environment in which it occurred.

2.  **Feature Requests:**
    If you have an idea for a new feature or improvement, please open a new `Issue` to describe your proposal. Explain why you think this feature would be useful and how it could be implemented.

3.  **Submitting Pull Requests (PRs):**
    * **Fork the Repository:** Start by forking the DefendoDoge repository to your GitHub account.
    * **Clone your Fork:** Clone your forked copy locally:
        ```bash
        git clone [https://github.com/YourUsername/DefendoDoge.git](https://github.com/YourUsername/DefendoDoge.git)
        cd DefendoDoge
        ```
    * **Create a New Branch:** Create a new branch for your work:
        ```bash
        git checkout -b feature/your-feature-name # For new features
        # Or
        git checkout -b bugfix/your-bugfix-name # For bug fixes
        ```
    * **Make Changes:** Implement your code changes. Ensure you follow the [Code Guidelines](#code-guidelines).
    * **Test Your Changes:** Make sure your changes do not introduce new bugs and work as expected.
    * **Commit your Changes:** Write a clear and concise commit message:
        ```bash
        git commit -m "feat: Add new token scanner feature"
        # Or
        git commit -m "fix: Resolve issue with DApp checker"
        ```
        (We recommend using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages).
    * **Push your Branch:** Push your changes to your forked repository on GitHub:
        ```bash
        git push origin feature/your-feature-name
        ```
    * **Open a Pull Request:** Go to your forked repository on GitHub and click "New pull request". Make sure you are merging into the correct branch (usually `develop` or `main`, depending on the project's workflow). Describe your pull request in detail.

## Code Guidelines

* **Formatting:** Use code formatting tools like Prettier (JavaScript) and Black (Python) to maintain consistent code formatting.
* **Comments:** Write clear and concise comments where necessary to explain complex code logic.
* **Documentation:** If you add new features or modify existing ones, update the relevant documentation in the `/docs` folder.
* **Tests:** Where possible, add unit or integration tests for your changes to ensure code stability.
* **API Keys:** Never include real API keys or sensitive data directly in the code. Use environment variables.

## Contributor Conduct

We expect all contributors to adhere to our Code of Conduct (if provided later). In short, be respectful and professional in all your interactions.

Thank you for contributing to DefendoDoge!