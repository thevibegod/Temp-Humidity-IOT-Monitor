import React,{Component} from 'react';
import spinner from './spinner.gif';

export default function Spinner(){
  return(
    <div>
    <img src={spinner} style={{margin:'auto',width:'200px',display:'block'}}/>
    </div>
  );
}
