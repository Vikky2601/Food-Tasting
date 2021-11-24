import React, { useEffect } from 'react'
import axios from 'axios';

function Verify() {

    const verifyAccount = async (e) => {
        //await setAttributeSet(e.target.value);
        await axios
            .get(
                `${process.env.REACT_APP_SERVER_PATH + window.location.href.replaceAll('http://localhost:3000/', '')}`
            )
            .then(async (res) => {
                localStorage.setItem('access', '')
                localStorage.setItem('refresh', '')
                localStorage.setItem('basic', '')
            });
    };


    useEffect(() => {
        verifyAccount()
    })

    return (
        <div>
            Verifying...
        </div>
    )
}

export default Verify
