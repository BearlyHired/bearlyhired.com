export const features = {
  welcome: {
    // WelcomePage feature doesn't need its own translations since it just composes components
    // All content is handled by individual reusable components
  },
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