import type { Meta, StoryObj } from '@storybook/react';
import { Features } from './Features';

const meta: Meta<typeof Features> = {
  title: 'Components/Features',
  component: Features,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1f2937' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: {
      description: {
        story: 'Features section displayed on a dark background for contrast.',
      },
    },
  },
};