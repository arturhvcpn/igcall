import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',
  transition: 'background 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$green500',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
