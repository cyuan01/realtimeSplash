import React, { Component, useState } from 'react';
import Firebase, { db } from '../../config/Firebase.js'
import {Link, Redirect} from 'react-router-dom'
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import logo from '../../assets/logos/rt.png';
import mockup from '../../assets/screens/frame1.png';

const Signup = () =>{

    var wheight = window.innerHeight
    var referredCode = localStorage.getItem('referralCode')
    var referralCode = Math.random().toString(36).slice(2)


    const [email,setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [authorized, setAuthorized] = useState(false)
    const [fbauth, setfbAuth] = useState(false)

    const handleSubmit = () => {
      console.log("submitting!")
        var a = Firebase.auth().createUserWithEmailAndPassword(email, password1).then(res => {
            var user = Firebase.auth().currentUser
            console.log(user.uid)
            db.collection("usersReferral").doc(user.uid).set({
                firstName: firstName,
                lastName: lastName,
                referredCode: referredCode,
                referralCode: referralCode,
                email: email
            })
            .then(res => {
              console.log("submitted")
                setAuthorized(true)
            })
        }
        )
        
        
    }

    const isInvalid =
      password1 !== password2 ||
      password1 === '' ||
      email === '' ||
      firstName === '' ||
      lastName === '';

    var user = Firebase.auth().currentUser

    if (user) {
        return <Redirect to='/dashboard'></Redirect>
    } else{
        // No user is signed in.
    }

    if(authorized){
        return <Redirect to='/dashboard'></Redirect>
    }
    return(
        <div>
            <Grid container>
                <Grid container item xs={4} style={{backgroundColor: '#5188ed',  flex: 1, padding: 50}}>
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
                <Grid container item xs={8} style={{ padding: 50}}>
                    <Grid xs={12} item style={{fontSize: 60, textAlign: 'flex-start'}}>
                        Sign up
                    </Grid>
                    <Grid xs={12} item style={{marginTop: 20, color: '#a9a9a9', fontSize: 30}}>
                            Win prizes, get early access and more by creating an account today
                    </Grid>
                    <Grid xs={12} item style={{marginTop: 5, color: '#a9a9a9', fontSize: 10}}>
                            Already have an account? Log in <Link to='/login'>Here</Link>
                    </Grid>
                
                    <form>
                    <Grid xs={12} item container direction='column' style={{fontSize: 20, marginTop: 30}}>
                        
                        <Grid xs={12} item>
                            <Typography style={{fontFamily: 'Quicksand'}}><strong>First Name</strong></Typography>
                            <TextField 
                            inputProps={{style: {fontFamily: 'Quicksand'}}}
                            variant="outlined" style={{width: 500}} placeholder='John'
                            onChange={(event) => {
                                setFirstName(event.target.value)
                            }}></TextField>
                        </Grid>
                        <Grid xs={12} item style={{marginTop: 10}}>
                            <Typography style={{fontFamily: 'Quicksand'}}><strong>Last Name</strong></Typography>
                            <TextField 
                            inputProps={{style: {fontFamily: 'Quicksand'}}}
                            id='last-name' variant="outlined" placeholder='Doe'style={{width: 500}}
                            onChange={(event) => {
                                setLastName(event.target.value)
                            }}></TextField>
                        </Grid>
                        <Grid xs={12} item style={{marginTop: 10}}>
                            <Typography style={{fontFamily: 'Quicksand'}}><strong>Email</strong></Typography>
                            <TextField 
                            inputProps={{style: {fontFamily: 'Quicksand'}}}
                            id='last-name' variant="outlined" placeholder='example@email.com'style={{width: 500}}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}></TextField>
                        </Grid>
                        <Grid xs={12} item style={{marginTop: 10}}>
                            <Typography style={{fontFamily: 'Quicksand'}}><strong>Password</strong></Typography>
                            <TextField 
                            inputProps={{style: {fontFamily: 'Quicksand'}}}
                            type='password' variant="outlined" placeholder='8-20 Characters'style={{width: 500}}
                            onChange={(event) => {
                                setPassword1(event.target.value)
                            }}></TextField>
                        </Grid>
                        <Grid xs={12} item style={{marginTop: 10}}>
                            <Typography style={{fontFamily: 'Quicksand'}}><strong>Confirm Password</strong></Typography>
                            <TextField  
                            inputProps={{style: {fontFamily: 'Quicksand'}}}
                            type='password'variant="outlined" placeholder='Confirm Password'style={{width: 500}}
                            onChange={(event) => {
                                setPassword2(event.target.value)
                            }}></TextField>
                        </Grid>
                        <Grid xs={12} item style={{marginTop: 50}}>
                            <Button disabled={isInvalid} style={{width: 150, height: 50, fontFamily: 'Quicksand', backgroundColor: '#393e46', color: '#eeeeee', fontSize: 17}}
                            onClick={handleSubmit}>Sign up</Button>
                        </Grid>
                    </Grid>
                    </form>
                    
                </Grid>
            </Grid>
           
        </div>
           

        
        
    )
}

export default Signup;