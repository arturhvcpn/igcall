import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@igcall-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'H2 Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `as` prop allows you to specify the HTML element that will be used for the heading.',
      },
    },
  },
}
