import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
    onJoinWaitlist: action('onJoinWaitlist'),
    onLearnMore: action('onLearnMore'),
    onEmailSubmit: action('onEmailSubmit'),
  },
};

export const WithCustomHandlers: Story = {
  args: {
    onJoinWaitlist: () => {
      action('onJoinWaitlist')();
      alert('Joining waitlist!');
    },
    onLearnMore: () => {
      action('onLearnMore')();
      alert('Learning more about Bearly Hired!');
    },
    onEmailSubmit: (email: string) => {
      action('onEmailSubmit')(email);
      alert(`Email submitted: ${email}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Welcome page with custom action handlers that show alerts.',
      },
    },
  },
};