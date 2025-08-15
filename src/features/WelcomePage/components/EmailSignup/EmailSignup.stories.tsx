import type { Meta, StoryObj } from '@storybook/react';
import { EmailSignup } from './EmailSignup';

const meta: Meta<typeof EmailSignup> = {
  title: 'Components/EmailSignup',
  component: EmailSignup,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'email submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (email: string) => console.log('Email submitted:', email),
  },
};

export const WithCustomAction: Story = {
  args: {
    onSubmit: (email: string) => console.log('Email submitted:', email),
  },
  parameters: {
    docs: {
      description: {
        story: 'Email signup form with custom action handler that shows an alert with the submitted email.',
      },
    },
  },
};