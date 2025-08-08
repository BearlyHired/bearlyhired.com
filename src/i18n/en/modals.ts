export const modals = {
  confirmation: {
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed?',
    confirm: 'Yes, Continue',
    cancel: 'Cancel',
  },
  deleteConfirmation: {
    title: 'Delete Item',
    message: 'This action cannot be undone. Are you sure you want to delete this item?',
    confirm: 'Delete',
    cancel: 'Keep Item',
  },
  error: {
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    retry: 'Retry',
    close: 'Close',
  },
  success: {
    title: 'Success',
    message: 'Action completed successfully.',
    close: 'Close',
  },
} as const;