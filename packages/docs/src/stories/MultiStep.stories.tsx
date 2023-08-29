import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@igcall-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    sizeStep: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const MultiStepMiddle: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
  },
}

export const MultiStepFull: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
