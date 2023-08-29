import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...rest }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

export type { TextInputProps }

export { TextInput }
