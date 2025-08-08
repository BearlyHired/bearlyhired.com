export const features = {
  auth: {
    login: {
      title: 'Welcome Back',
      subtitle: 'Please sign in to your account',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      forgotPassword: 'Forgot your password?',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
    },
    register: {
      title: 'Create Account',
      subtitle: 'Join us today',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm Password',
      hasAccount: 'Already have an account?',
      signIn: 'Sign in',
    },
  },
  profile: {
    title: 'Profile Settings',
    personalInfo: 'Personal Information',
    preferences: 'Preferences',
    security: 'Security',
  },
} as const;