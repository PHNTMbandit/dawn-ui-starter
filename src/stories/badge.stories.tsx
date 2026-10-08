import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from 'dawn-ui-react'

// Example story: explore Dawn UI's Badge tones and variants.
const meta = {
  args: {
    children: 'Badge',
    tone: 'brand',
    variant: 'fill',
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['brand', 'accent', 'neutral', 'success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['fill', 'outline'],
    },
  },
  component: Badge,
  tags: ['autodocs'],
  title: 'Dawn UI/Badge',
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Fill: Story = {}

export const Outline: Story = {
  args: { variant: 'outline' },
}

// Show each tone in both variants for a quick visual reference.
export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <Badge tone="brand">Brand</Badge>
        <Badge tone="accent">Accent</Badge>
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="info">Info</Badge>
        <Badge tone="warning">Warning</Badge>
        <Badge tone="error">Error</Badge>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <Badge tone="brand" variant="outline">
          Brand
        </Badge>
        <Badge tone="accent" variant="outline">
          Accent
        </Badge>
        <Badge tone="neutral" variant="outline">
          Neutral
        </Badge>
        <Badge tone="success" variant="outline">
          Success
        </Badge>
        <Badge tone="info" variant="outline">
          Info
        </Badge>
        <Badge tone="warning" variant="outline">
          Warning
        </Badge>
        <Badge tone="error" variant="outline">
          Error
        </Badge>
      </div>
    </div>
  ),
}
