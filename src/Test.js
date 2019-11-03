import React from 'react'
import {useSelector} from 'react-redux';

const Test = () => {
    const login = useSelector((state) => state.login);
    return (
        <div>
            {console.log("****Login Response****")}
            {console.log(login.loginResponse)}
        </div>
    )
}

export default Test

