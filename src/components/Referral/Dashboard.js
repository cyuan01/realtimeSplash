import React, {useState} from 'react';
import logo from '../../assets/logos/rtLogo.png';
import Firebase, { db } from '../../config/Firebase.js'
import { useHistory, Redirect } from "react-router-dom";
import {Paper, Typography, TextField, Grid, Button} from '@material-ui/core'
import './referral.css';



function Dashboard() {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false)
  const [referralData, setReferralData] = useState({
    count: 0,
    code: 'https://www.realtimesports.io/referral/',
    data: false
  })
  const [referralCount, setReferralCount] = useState(0)
  const [referralString, setReferralString] = useState('https://www.realtimesports.io/referral/')


  var user = Firebase.auth().currentUser

  if(user != null && !referralData.data){
    var docRef = db.collection('usersReferral').doc(user.uid)
    docRef.get().then(function(doc) {
      if (doc.exists) {
          var rc = doc.data()['referralCode']
          console.log(rc)
          db.collection("usersReferral").where("referredCode", "==", rc)
          .get()
          .then(function(querySnapshot) {
              setReferralData({
                count: querySnapshot.size,
                code: 'https://www.realtimesports.io/referral/' + rc,
                data: true
              })
              // setReferralCount(querySnapshot.size)
              // setReferralString(referralString+rc)
             
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  
    var citiesRef = db.collection("usersReferral");

  }
  

  const handleSignOut = () => {
    Firebase.auth().signOut().then(function() {
      // Sign-out successful.
      setRedirect(true)
    }).catch(function(error) {
      // An error happened.
    });
  }


  if(redirect){
    return <Redirect to='./Login'></Redirect>
  }
  

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"></link>
      <header className="App-header">
        <Paper style={{width: 1300, height: 650, padding: 30, }}>
          <Typography style={{fontSize: 40, marginTop: 10, fontFamily: 'Quicksand'}}>
            <strong>Welcome Preetham</strong>
          </Typography>
          <Button onClick={handleSignOut}>Sign out</Button>
                    
          <Grid container style={{flex: 1, marginTop: 140, justifyContent: 'center', }}>
            <Grid item lg={12}>
              <form>
                <Typography style={{fontSize: 25, fontFamily: 'Quicksand'}}>This is your unique referral link to add friends</Typography>
                <TextField 
                inputProps={{min: 0, style: { textAlign: 'center', fontFamily: 'Quicksand', fontSize: 22}}}
                style={{width: 360, height: 30, textAlign: 'center'}} value={referralData.code} id='outlined-basic' variant="outlined"></TextField>
              </form>
            </Grid>
            <Grid item lg={12} flex={1} style={{marginTop: 100, }}>
              <Typography style={{fontSize: 25, fontFamily: 'Quicksand'}}>Get more friends to Sign up using your referral link to win prizes</Typography>
              <Typography style={{fontSize: 25, fontFamily: 'Quicksand', marginTop: 30}}>Number of referrals</Typography>
              <Typography style={{fontSize: 50, fontFamily: 'Quicksand'}}>{referralData.count}</Typography>
            </Grid>
          
          </Grid>
          
        </Paper>
      </header>
    </div>
  );
}

export default Dashboard;
