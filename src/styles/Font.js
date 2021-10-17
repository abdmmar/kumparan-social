import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Inter';
        src: url('./font/Inter-VariableFont_slnt_wght.woff2');
      }
      `}
  />
)

export default Fonts
