import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import './main.css'
import {AppContainer} from 'react-hot-loader'


const renderApp = () => {
    ReactDOM.render(
        <AppContainer><App /></AppContainer>,
        document.getElementById('root')
    )
}

renderApp()

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderApp()
    })
}
