import { styled, keyframes } from '../../styles'
import * as CheckBox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled(CheckBox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray600',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  boxSizing: 'border-box',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',
  transition: 'border 0.2s ease-in-out',

  '&[data-state="checked"]': {
    backgroundColor: '$green300',
  },

  '&:focus': {
    border: '2px solid $green300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckBoxIndicator = styled(CheckBox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
