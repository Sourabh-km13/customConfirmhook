# ConfirmHook - Custom React Hook for Confirmation Modals

**ConfirmHook** is a custom React hook that provides a user-friendly confirmation modal to allow users to confirm or deny actions. It simplifies handling user decisions and performs actions based on their choices by leveraging promises.

## Features

- **Reusable Confirmation Modal**: A standardized modal that can be used across components, prompting users to confirm or deny actions.
- **Promise-based**: Returns a promise that:
  - **Resolves** if the "Confirm" button is clicked.
  - **Rejects** if the "Deny" button is clicked.
- **Component Accessibility Control**: While the modal is open, all other components on the page are disabled

