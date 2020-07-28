import React, { Component, useState } from 'react';
import Firebase, { db } from '../../config/Firebase.js'
import {Link, Redirect} from 'react-router-dom'
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import logo from '../../assets/logos/rt.png';
import mockup from '../../assets/screens/frame1.png';

const Signup = () =>{

    var wheight = window.innerHeight

    
    const [email,setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    
    const [authorized, setAuthorized] = useState(false)

    const handleSubmit = () => {
        Firebase.auth().signInWithEmailAndPassword(email, password1).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        })
        .then((res) => {
            setAuthorized(true)
        })
        
        
        
    }

    const isInvalid =
      password1 !== 
      password1 === '' ||
      email === '';
     
    var user = Firebase.auth().currentUser
    if (user) {
        return <Redirect to='/dashboard'></Redirect>
    } 
    else if(authorized){
        return <Redirect to='/dashboard'></Redirect>
    }
    else{
        return(
            <div>
                <Grid container>
                    <Grid container item xs={0} lg={4} style={{backgroundColor: '#5188ed',  flex: 1, padding: 50}}>
                        <Grid xs={12} item style={{marginTop: 15}}>
                            <img src={logo} style={{width: 140, height: 65}}></img>
                        </Grid>
                        <Grid xs={12} item style={{marginTop: 25}}>
                            <Typography style={{fontSize: 30, color: 'white', fontFamily: 'Quicksand'}}>
                                <strong>Gaming is evolving, don’t leave your friends behind </strong> 
                            </Typography>
                        </Grid>
                        <Grid xs={12} item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={mockup} style={{width: 275, height: 500}}></img>
                        </Grid>
                        
                        
                    </Grid>
                    <Grid container item xs={12} lg={8} style={{ padding: 50, paddingTop: 150, justifyContent: 'center'}}>
                        <Grid xs={12} item style={{fontSize: 60, textAlign: 'center'}}>
                            Log in
                        </Grid>
                        
                    
                        <form>
                        <Grid xs={12} item container direction='column' justify='center'style={{fontSize: 20, alignItems: 'center'}}>
                            
                           
                            <Grid xs={12} item style={{}}>
                                <Typography style={{fontFamily: 'Quicksand'}}><strong>Email</strong></Typography>
                                <TextField 
                                inputProps={{style: {fontFamily: 'Quicksand'}}}
                                id='last-name' variant="outlined" placeholder='example@email.com'style={{width: 500}}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}></TextField>
                            </Grid>
                            <Grid xs={12} item style={{marginTop: 40}}>
                                <Typography style={{fontFamily: 'Quicksand'}}><strong>Password</strong></Typography>
                                <TextField 
                                inputProps={{style: {fontFamily: 'Quicksand'}}}
                                type='password' variant="outlined" placeholder='8-20 Characters'style={{width: 500}}
                                onChange={(event) => {
                                    setPassword1(event.target.value)
                                }}></TextField>
                            </Grid>
                            
                            <Grid xs={12} item style={{display: 'flex', flex: 1, marginTop: 100, alignItems: 'center'}}>
                                <Button disabled={isInvalid} style={{width: 150, height: 50, fontFamily: 'Quicksand', backgroundColor: '#393e46', color: '#eeeeee', fontSize: 17}}
                                onClick={handleSubmit}>Log in</Button>
                            </Grid>
                        </Grid>
                        </form>
                        
                    </Grid>
                </Grid>
               
            </div>
               
    
            
            
        )
    }
    
}

export default Signup;