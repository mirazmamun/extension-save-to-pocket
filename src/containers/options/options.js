import React from 'react'
import ReactDOM from 'react-dom'
import Options from './options.container'
import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import { Themes } from 'Elements/Themes/themes'
import { SVGSymbols } from 'Elements/Icons/icon.symbols'
import { PORT_NAME } from 'Common/constants'
import { sendMessage } from 'Common/interface'

function getExtensionInfo() {
  return new Promise(resolve =>
    sendMessage(null, { action: 'getExtensionInfo' }, resolve)
  )
}

getExtensionInfo().then(info => {
  const proxyStore = new Store({
    portName: PORT_NAME,
    extensionId: info.id
  })

  proxyStore.ready().then(() => {
    document.addEventListener('click', function() {
      sendMessage(null, { action: 'frameFocus', status: true })
    })

    ReactDOM.render(
      <React.Fragment>
        <SVGSymbols />
        <ThemeProvider theme={Themes['light']}>
          <Provider store={proxyStore}>
            <Options />
          </Provider>
        </ThemeProvider>
      </React.Fragment>,
      document.getElementById('pocket-extension-anchor')
    )
  })
})
