import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps, Icon } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    variant: 'primary',
    children: 'Send',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    variant: 'primary',
    children: 'Send',
    disabled: true,
  },
}

export const ButtonWithIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    variant: 'primary',
    children: (
      <>
        Next Step
        <Icon.ArrowRight weight="bold" />
      </>
    ),
    disabled: false,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
