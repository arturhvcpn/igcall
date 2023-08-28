import { ComponentProps } from 'react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'
import { Icon } from '../../icons'

type CheckBoxProps = ComponentProps<typeof CheckBoxContainer>

function CheckBox({ ...rest }: CheckBoxProps) {
  return (
    <CheckBoxContainer {...rest}>
      <CheckBoxIndicator asChild>
        <Icon.Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

CheckBox.displayName = 'CheckBox'

export type { CheckBoxProps }

export { CheckBox }
