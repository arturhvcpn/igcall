import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/arturhvcpn.png',
    alt: 'Artur Polo Norte',
  },
  argTypes: {
    src: {
      description: 'Image URL',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'Alternative text for image',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const AvatarWithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
    alt: 'Artur Polo Norte',
  },
}
