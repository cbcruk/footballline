import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import { Provider } from 'jotai'
import App from './App'
import './lib/firebaseApp'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <Provider>
        <App />
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
  rootElement
)
