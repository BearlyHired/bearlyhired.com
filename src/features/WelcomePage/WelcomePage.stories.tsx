import type { Meta, StoryObj } from '@storybook/react';
import { WelcomePage } from './WelcomePage';

const meta: Meta<typeof WelcomePage> = {
  title: 'Features/WelcomePage',
  component: WelcomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onJoinWaitlist: { action: 'join waitlist clicked' },
    onLearnMore: { action: 'learn more clicked' },
    onEmailSubmit: { action: 'email submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onJoinWaitlist: () => console.log('Join waitlist clicked'),
    onLearnMore: () => console.log('Learn more clicked'),
    onEmailSubmit: (email: string) => console.log('Email submitted:', email),
  },
};

export const WithCustomHandlers: Story = {
  args: {
    onJoinWaitlist: () => console.log('Join waitlist clicked'),
    onLearnMore: () => console.log('Learn more clicked'),
    onEmailSubmit: (email: string) => console.log('Email submitted:', email),
  },
  parameters: {
    docs: {
      description: {
        story: 'Welcome page with custom action handlers that show alerts.',
      },
    },
  },
};