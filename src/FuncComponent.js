import React, { Component } from 'react'

function FuncComponent(props) {
    console.log(props);
  return (

    // Component - building blocks of an application which we can reuse.

    // props - it stands for properties, to pass data from parent component to child component 

    <div>
        <h2>FuncComponent</h2>
        <h3>Welcome to {props.courseName} and the duration is {props.duration}</h3>
    </div>
  )
}

export default FuncComponent