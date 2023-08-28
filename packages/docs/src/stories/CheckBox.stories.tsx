import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
