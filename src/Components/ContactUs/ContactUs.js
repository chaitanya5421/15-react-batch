import React, { Component } from 'react'

export class ContactUs extends Component {
    state = {
      firstName :"",
      lastName : "",
      email:"",
      phone:"",
      firstNameErr:"",
      lastNameErr:"",
      emailErr:"",
      phoneErr:""
    }   

    handleChange = (e) =>{
      // console.log(e.target.value)
      const {name,value} = e.target;
      this.setState({[name]:value})
      console.log(this.state)
    }

   handleSubmit = (e)=>{
    e.preventDefault();
    const valid = this.validateForm();
    if(valid){
      // send the data to server
      console.log(this.state)
    }
    console.log(this.state)
    console.log("form submitted")
   } 

   validateForm = ()=>{
    let firstNameErr = '';
    let lastNameErr = '';
    let emailErr = '';
    let phoneErr = '';

    if(this.state.firstName.length <= 4){
      firstNameErr = "firstName should be atleast 4 char";
    }
    if(this.state.lastName < 1){
      lastNameErr = "lastName should be atleast 1 char";
    }
    if(this.state.email.length<5){
      emailErr = "Enter a valid email";
    }
    if(this.state.phone.length !== 10){
      phoneErr = "enter a valid phone number";
    }

    //falsy values
    // false
    // ""
    //null
    // undefined
    //Nan

    if(firstNameErr || lastNameErr || emailErr || phoneErr){
      this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
      return false;
    }else{
      this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
      return true;
    }

   }

   //validation
   //firstname > 4
   //lastname >1
   //email'@'include
   //phone it should be 10

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4">
             <h2>ContactUs</h2>

             <form onSubmit={this.handleSubmit}>
            <div className="mt-3">
              <input type="text"
               name="firstName"
               placeholder="Enter your first Name"
               onChange = {this.handleChange}
               value= {this.state.firstName}
               />
            </div>
            <p className="text-danger">{this.state.firstNameErr}</p>

            <div className="mt-3">
              <input type="text" name="lastName"
              placeholder="Enter your last Name"
              onChange = {this.handleChange}
              value= {this.state.lastName}
              />
              <p className="text-danger">{this.state.lastNameErr}</p>
            </div>
            <div className="mt-3">
              <input type="email" name="email"
              placeholder="Enter your email"
              onChange = {this.handleChange}
              value= {this.state.email}
              />
              <p className="text-danger">{this.state.emailErr}</p>

            </div>
            <div className="mt-3">
              <input type="number" name="phone" 
              placeholder="Enter your phone Number"
              onChange = {this.handleChange}
              value= {this.state.phone}
              />
              <p className="text-danger">{this.state.phoneErr}</p>

            </div>

            <button className="btn btn-warning mt-3">Submit</button>
             </form>

             </div>
             <div className="col-md-4"></div>
          </div>
        </div>




        
      </div>
    )
  }
}

export default ContactUs