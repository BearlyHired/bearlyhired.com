export const features = {
  welcome: {
    header: {
      logo: 'Bearly Hired',
      joinWaitlist: 'Join Waitlist',
    },
    hero: {
      title: 'Professional.',
      subtitle: 'Bearly.',
      description: 'A professional network for actual humans, not "thought leaders." No corporate fakery. No influencer energy. Just people sharing what they\'re doing, making, or struggling with.',
      joinWaitlist: 'Join the Waitlist',
      learnMore: 'Learn More',
    },
    features: {
      title: 'Networking for the emotionally employed',
      cards: {
        corporate: {
          title: 'No Corporate Fakery',
          description: 'Be authentic self without the need for corporate jargon or performance.',
        },
        lunch: {
          title: 'Just Trying to Make It to Lunch',
          description: 'A community that understands the daily struggle and celebrates small wins.',
        },
        public: {
          title: 'Built in Public',
          description: 'Truly open source and built live on Twitch with complete transparency.',
        },
      },
    },
    signup: {
      title: 'Get notified when we launch',
      subtitle: 'Be the first to join a professional network that doesn\'t take itself too seriously.',
      emailPlaceholder: 'Enter your email',
      joinWaitlist: 'Join Waitlist',
    },
    footer: {
      launchDate: 'Launching in Fall 2023',
      copyright: '© 2023 Bearly Hired. All rights reserved.',
    },
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