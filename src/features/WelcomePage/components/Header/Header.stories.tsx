import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  argTypes: {
    onJoinWaitlist: { action: 'join waitlist clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onJoinWaitlist: () => console.log('Join waitlist clicked'),
  },
};

export const WithCustomAction: Story = {
  args: {
    onJoinWaitlist: () => alert('Custom join waitlist action!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header component with custom join waitlist action handler.',
      },
    },
  },
};