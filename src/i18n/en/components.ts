export const components = {
  button: {
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    loading: 'Loading...',
  },
  input: {
    required: 'This field is required',
    invalid: 'Please enter a valid value',
    placeholder: 'Enter text...',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    login: 'Log In',
    logout: 'Log Out',
  },
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
  emailSignup: {
    title: 'Get notified when we launch',
    subtitle: 'Be the first to join a professional network that doesn\'t take itself too seriously.',
    emailPlaceholder: 'Enter your email',
    joinWaitlist: 'Join Waitlist',
  },
  footer: {
    launchDate: 'Launching in Fall 2023',
    copyright: '© 2023 Bearly Hired. All rights reserved.',
  },
} as const;