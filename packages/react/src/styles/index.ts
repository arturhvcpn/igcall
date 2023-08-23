import {
  colors,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    radii,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    space,
  },
})
