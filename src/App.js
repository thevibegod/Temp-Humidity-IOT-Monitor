import React, { useState,useEffect } from 'react';
import DisplayComponent from './DisplayComponent.js';
import Spinner from './Spinner.js';

import firebase from 'firebase';

function App() {

  const [temperature,setTemperature] = useState('');
  const [humidity,setHumidity] = useState('');
  const [loading,setLoading] = useState(true);

  const loadValues = () => {
    setLoading(true);
    const database = firebase.database();
    const ref = firebase.database().ref();
      ref.on("value", function(snapshot) {
      const data = snapshot.val();
      for (var key in data.DHT22.Temperature) {
      setTemperature(data.DHT22.Temperature[key]);
      }
      for (var key in data.DHT22.Humidity) {
      setHumidity(data.DHT22.Humidity[key]);
      }
      setLoading(false);

  }, function (error) {
    console.log("Error: " + error.code);
  });
  }

  useEffect(() => {
    const firebaseConfig = {
            apiKey: "AIzaSyC4dwrWV13iSWYAktERnXoPNhqJ02f3pHM",
            authDomain: "temp-humidity-monitor-7b3e7.firebaseapp.com",
            databaseURL: "https://temp-humidity-monitor-7b3e7.firebaseio.com",
            projectId: "temp-humidity-monitor-7b3e7",
            storageBucket: "temp-humidity-monitor-7b3e7.appspot.com",
            messagingSenderId: "432173568747",
            appId: "1:432173568747:web:de474f4ed0ea64469664ae",
            measurementId: "G-FCJ6R1CKYC"
    };

    firebase.initializeApp(firebaseConfig);
    loadValues();
  },[])

    if(!loading){
      return (

      <div style={{backgroundColor:'#eaa6f5',height:'200%',width:'100%',position:'fixed'}}>
        <center>
        <div style={{backgroundColor:'#2e2aa1',padding:'10px',margin:'0'}}>
        <h1 style={{fontFamily:"Times New Roman"}}>Temperature and Humidity Monitoring System</h1>
        </div>
        <DisplayComponent paramName="Temperature" paramValue={temperature}/>
        <DisplayComponent paramName="Humidity" paramValue={humidity}/>
      </center>
      </div>
    );
  }
  else{
    return <Spinner/>
  }
}


export default App;
