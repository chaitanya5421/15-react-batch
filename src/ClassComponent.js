import React from 'react';

class ClassComponent extends React.Component{
constructor(props){
    super(props)
    console.log("constructor executed")
}

    state = {
        value:""
    }

    static getDerivedStateFromProps(props,state){
        console.log('Static getDerivedStateFromProps executed');
        return null;
    }

    componentDidMount(){
        console.log("componentdidmount")
    }

    

    render(){
        console.log("render Executed")
        return(
            <div>
                <h2>Class Component</h2>
            </div>
        )
    }
}

export default ClassComponent;