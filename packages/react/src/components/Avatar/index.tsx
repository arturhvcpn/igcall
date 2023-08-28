import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { Icon } from '../../icons'

type AvatarProps = ComponentProps<typeof AvatarImage>

function Avatar({ ...rest }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        <Icon.User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'

export type { AvatarProps }

export { Avatar }
