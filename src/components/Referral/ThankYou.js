import React from 'react';
import logo from '../../assets/logos/rtLogo.png';
import { useHistory } from "react-router-dom";
import {Paper, Typography, TextField, Grid, Button} from '@material-ui/core'
import './referral.css';

function ThankYou() {
  const history = useHistory();
  var referralCode = Math.random().toString(36).slice(2)
  console.log(referralCode)
  localStorage.setItem('referralCode', referralCode)

  const routeChange = () =>{ 
    let path = `/signup`; 
    history.push(path);
  }

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"></link>
      <header className="App-header">
        <Paper style={{width: 1300, height: 650, padding: 30, }}>
          <img src={logo} style={{width: 200, height: 90}}></img>
          <Typography style={{fontSize: 40, marginTop: 10, fontFamily: 'Quicksand'}}>
            <strong>Thank you for signing up!!!!</strong>
          </Typography>
                    
          <Grid container style={{flex: 1, marginTop: 140, justifyContent: 'center', }}>
            <Grid item lg={12}>
              <form>
                <Typography style={{fontSize: 25, fontFamily: 'Quicksand'}}>Send this link to your friends to win prizes</Typography>
                <TextField 
                inputProps={{min: 0, style: { textAlign: 'center', fontFamily: 'Quicksand', fontSize: 22}}}
                style={{width: 360, height: 30, textAlign: 'center'}}defaultValue={"https://www.realtimesports.io/referral/"+referralCode} id='outlined-basic' variant="outlined"></TextField>
              </form>
            </Grid>
            <Grid item lg={12} flex={1} style={{marginTop: 150, }}>
              <Typography style={{fontSize: 25, fontFamily: 'Quicksand'}}>Sign up to get early access to the platform and track your progress</Typography>
              <Button style={{marginTop: 10, backgroundColor: '#393e46', color: 'white', width: 90, fontFamily: 'Quicksand'}}
                onClick={routeChange}
              >
                Sign up
                </Button>
            </Grid>
          
          </Grid>
          
        </Paper>
      </header>
    </div>
  );
}

export default ThankYou;
