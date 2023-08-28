import { ComponentProps } from 'react'
import { MultiStepContainer, MultiStepLabel, Step, Steps } from './styles'

interface MultiStepProps extends ComponentProps<typeof MultiStepContainer> {
  sizeStep: number
  currentStep: number
}

function MultiStep({ sizeStep, currentStep, ...rest }: MultiStepProps) {
  const stepNumbers = Array.from({ length: sizeStep }, (_, index) => index + 1)

  return (
    <MultiStepContainer {...rest}>
      <MultiStepLabel>
        Passo {currentStep} de {sizeStep}
      </MultiStepLabel>
      <Steps css={{ '--steps-size': sizeStep }}>
        {stepNumbers.map((step, index) => (
          <Step key={index} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'

export type { MultiStepProps }

export { MultiStep }
