import React, { Component } from 'react'

export class LifecycleComponents extends Component {
    constructor(props){
        super(props)
    }

    state = {
        usersData:[],
    }

    componentDidMount(){
        this.getUsersData();
    }

    getUsersData = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        this.setState({usersData:data})
    }

    
  render() {
    return (
      <div>
        <h2>LifecycleMethods</h2>
        {/* 
            Mounting Phase
            Updating Phase
            Unmounting

        
        */}

<table class="table table-striped">
            <thead>
            <tr>
                <th>Id</th>
                <th>name</th>
                <th>userName</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                { this.state.usersData.length ? (this.state.usersData.map((user)=>(
                   <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                   </tr>
                ))):(<p>Loading.....</p>)
             }
            </tbody>
        </table>

      </div>
    )
  }
}

export default LifecycleComponents