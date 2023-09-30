import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            email:'',
            name:'',
            mobile:'',
            errors: {email:''}

        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this) 
        this.errorStyle={
            color:'red',
           
          };
    }
    changeHandler(e){
       if(e.target.name=="email" && e.target.value!=""){
        let errors = {};
       // errors['email']="";
        //this.setState({errors:errors});
       }
       console.log(this.state);
       this.setState({[e.target.name]:e.target.value});
       var errors={...this.state.errors};
       errors["email"]="Hiii1";
       this.setState({errors:errors});
       console.log(this.state);
    }

    submitForm(e){
        e.preventDefault();
        if(this.state.email==""){
           
            let errors = {};
            errors['email']="Please enter email id";
            this.setState({errors:errors});
        }
        console.log(this.state);
    }

    render(props){
        return <div>
             <h1>Contact Us{props}</h1>
             <form >
  <div className="form-group">
    <label >Email address</label>
    <input type="email" name="email"  onChange={this.changeHandler}  value={this.state.email}  />
     <small style={{color: "red"}}>{this.state.errors["email"]}</small>
  </div>
  <div className="form-group">
    <label >Name</label>
    <input type="text" name="name" onChange={this.changeHandler}  value={this.state.name}  />
  </div>
  <div className="form-group">
    <label >Mobile No</label>
    <input type="text" name="mobile" onChange={this.changeHandler}  value={this.state.mobile}  />
  </div>
  <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
</form>
            </div>
    }
}

export default Contact;