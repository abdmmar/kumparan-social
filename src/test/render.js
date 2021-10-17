import PropTypes from 'prop-types'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store as appStore } from 'app/store'

function render(ui, { store = appStore, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
