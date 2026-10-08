import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'dawn-ui-react'

// Example story: explore Dawn UI's Button via the controls panel.
const meta = {
  args: {
    children: 'Button',
    size: 'medium',
    tone: 'brand',
    variant: 'fill',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    tone: {
      control: 'select',
      options: ['brand', 'accent', 'neutral', 'success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['fill', 'outline', 'ghost', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Dawn UI/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Outline: Story = {
  args: { tone: 'neutral', variant: 'outline' },
}

export const Ghost: Story = {
  args: { tone: 'neutral', variant: 'ghost' },
}

export const Success: Story = {
  args: { children: 'Save changes', tone: 'success' },
}

// Render every tone side by side for a quick visual reference.
export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Button tone="brand">Brand</Button>
      <Button tone="accent">Accent</Button>
      <Button tone="neutral">Neutral</Button>
      <Button tone="success">Success</Button>
      <Button tone="info">Info</Button>
      <Button tone="warning">Warning</Button>
      <Button tone="error">Error</Button>
    </div>
  ),
}
