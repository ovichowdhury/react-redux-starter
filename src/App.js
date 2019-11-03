import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Test from './Test';


// Example imports
import Login from './components/login/Login';


function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hello Redux</h1>
                <Login 
                    title="Login Form"
                    inputOneLabel="Username"
                    inputOneType="text"
                    inputOnePlaceHolder="User Name"
                    inputTwoLabel="Password"
                    inputTwoType="password"
                    inputTwoPlaceHolder="Password"
                    btnValue="Login"

                />

                <Test />

            </div>
        </Provider>

    );
}

export default App;
