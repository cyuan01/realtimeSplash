import React from 'react';
import { Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';

function Referral(){
    var str = window.location.href
    var referralCode = str.split('/')[4]
    localStorage.setItem('referralCode', referralCode)
    return (
    <Redirect to={'/signup'}/>
    )

}

export default Referral