import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

function Colors() {
  function colorBasedInContrast(value: string) {
    return getContrast(value, '#FFFFFF') > 3.5 ? '#FFFFFF' : '#000000'
  }

  const colorsFromTheme = Object.entries(colors)
  const AllColors = colorsFromTheme.map(([key, value]) => (
    <div
      key={key}
      style={{
        backgroundColor: value,
        color: colorBasedInContrast(value),
        fontFamily: 'monospace',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <strong>${key}</strong>
      <span>{value}</span>
    </div>
  ))

  return AllColors
}

function AllColorsFromThemeGrid() {
  return (
    <section>
      <Colors />
    </section>
  )
}

export { AllColorsFromThemeGrid }
