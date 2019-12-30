import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
=======
import { BrowserRouter } from 'react-router-dom';


import { Provider } from "react-redux";
import configureStore from './store/cinfigureStore';


const store = configureStore();

function DatabaseApplication() {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(
    <DatabaseApplication />
    , document.getElementById('root'));
>>>>>>> Initial commit from Create React App and structuring componrnts

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
