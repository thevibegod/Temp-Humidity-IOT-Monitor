import React from 'react';

export default function DisplayComponent(props){
  return(
        <div style={containerStyle}>
          <p>{props.paramName}</p>
          <p>{props.paramValue}</p>
        </div>
      );
}


const containerStyle = {
  border:'2px solid black',
  display:'flex',
  justifyContent:'space-around',
  flexDirection:'row',
  margin:'50px 0',
  fontSize:'20px',
  width:'360px',
  backgroundColor:'rgba(255,255,255,0.2)'
}
