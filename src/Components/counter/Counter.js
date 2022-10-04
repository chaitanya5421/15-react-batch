import React, { Component } from 'react'

export class Counter extends Component {
        // constructor(props){
        //     super(props)
        //     this.state = {
        //         count :0,
        //     }
        // }

        state = {
            count:0
        }

        handleIncrement = ()=>{
            //never mutate the state directly
            this.setState({count:this.state.count+1})
        }

        handleDecrement = ()=>{
            //never mutate the state directly
            this.setState({count:this.state.count-1})
        }

  render() {
    return (
      <div>
        <h2 className="text-center my-4">Counter App</h2>
        <center>
            <h2>{this.state.count}</h2>
            <button className='btn btn-warning mx-4' onClick={this.handleIncrement}>Increment</button>
            <button className='btn btn-danger mx-4' onClick={this.handleDecrement}>Decrement</button>
            <button className='btn btn-info mx-4' >Reset</button>
        </center>
      </div>
    )
  }
}

export default Counter