import type { Meta, StoryObj } from '@storybook/react';
import { Button } from ".";
import { User } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'danger',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
};

export const Icon: Story = {
  args: {
    children: <User />,
    size: 'icon',
  },
};

export const AsChild: Story = {
  args: {
    children: <div>Button</div>,
    asChild: true,
  },
};