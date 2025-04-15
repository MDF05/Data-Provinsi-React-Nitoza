import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './stores/store'
import { Provider as ChakraProvider } from "./components/ui/provider"
import { App } from './app'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
          <App></App>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
)
