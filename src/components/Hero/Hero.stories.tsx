import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  argTypes: {
    onJoinWaitlist: { action: 'join waitlist clicked' },
    onLearnMore: { action: 'learn more clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onJoinWaitlist: () => console.log('Join waitlist clicked'),
    onLearnMore: () => console.log('Learn more clicked'),
  },
};

export const WithCustomActions: Story = {
  args: {
    onJoinWaitlist: () => alert('Joining waitlist!'),
    onLearnMore: () => alert('Learning more!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero section with custom action handlers for demonstration.',
      },
    },
  },
};