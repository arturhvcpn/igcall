import { ComponentProps } from 'react'
import { styled } from '../../styles'

const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'

export type { TextAreaProps }

export { TextArea }
