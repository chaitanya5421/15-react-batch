import React from 'react'
import "./App.css"
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import StylingsCss from './StylingsCss';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import UserData from './Components/UserData';
import ConditionalRend from './Components/CondionalRendering/ConditionalRend';
import Counter from './Components/counter/Counter';
import ContactUs from './Components/ContactUs/ContactUs';
import LifecycleComponents from './Components/lifecyclemethods/LifecycleComponents';
const App=()=>{
    return(
      <div>
                  <Header />
        {/* <h2 className='App'>Welcome to React</h2> */}
        {/* <FuncComponent courseName="Reactjs" duration="3 Months" /> */}
        <ClassComponent  />
        <LifecycleComponents />
          {/* <StylingsCss /> */}
          {/* <UserData /> */}
          {/* <ConditionalRend /> */}
          {/* <Counter /> */}
          {/* <ContactUs /> */}
      </div>
    )
}

export default App;