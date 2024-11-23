import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Body from './component/Body.js'
import { Provider } from 'react-redux' 
import Store from '../utils/store.js'

const App = () => {
    return(
        <Provider store={Store}>

            <Header/>
            <Body/>

        </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);