import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { ErrorBoundary } from './ErrorBoundary';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onError: { action: 'error occurred' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('This is a test error for demonstration purposes');
  }
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Normal Application Content</h1>
      <p>This content is displayed when there are no errors.</p>
    </div>
  );
};

export const NoError: Story = {
  args: {
    children: <ThrowError shouldThrow={false} />,
  },
};

export const WithError: Story = {
  args: {
    children: <ThrowError shouldThrow={true} />,
  },
};

export const WithCustomFallback: Story = {
  args: {
    children: <ThrowError shouldThrow={true} />,
    fallback: (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        backgroundColor: '#fee',
        border: '2px solid #f00',
        borderRadius: '8px',
        margin: '2rem'
      }}>
        <h2>Custom Error Fallback</h2>
        <p>This is a custom error UI component.</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: (args) => {
    const InteractiveDemo = () => {
      const [hasError, setHasError] = useState(false);
      const [key, setKey] = useState(0);

      const handleReset = () => {
        setHasError(false);
        setKey(prev => prev + 1);
      };

      return (
        <div style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <button
              onClick={() => setHasError(!hasError)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: hasError ? '#4ade80' : '#f87171',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '1rem'
              }}
            >
              {hasError ? 'Fix Error' : 'Trigger Error'}
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Reset ErrorBoundary
            </button>
          </div>
          <ErrorBoundary key={key} {...args}>
            <ThrowError shouldThrow={hasError} />
          </ErrorBoundary>
        </div>
      );
    };

    return <InteractiveDemo />;
  },
};