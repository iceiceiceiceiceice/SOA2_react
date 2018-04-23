import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './css/login.css';
import Student from './Student/Student';
import Covanhoctap from './Covanhoctap/Covanhoctap';
import Monitor from './Monitor/Monitor';

class Loginpage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userID:"",
      islogin:false,
      role: null,
      token:null
    };
  }
  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
    console.log(this.state.username);
  }
  handleChangePassword(event){
    this.setState({
      password: event.target.value
    });
    console.log(this.state.password);
  }
  submittest(e){
    const user = {
      username : "15020881",
      password : "123456"
    }
    if(this.state.username === user.username && this.state.password === user.password){
      this.setState({
          islogin:true
      });
      
      ReactDOM.render(
          <Student 
          username={this.state.username}
          />,
          document.getElementById("root")
        );
      }
      else{
        console.log("not ok");
        alert("Xin mời nhập lại.");
      }
  }

// Xu ly viec dang nhap
  handleSubmit(e){   
     axios
     .post("https://training-point.herokuapp.com/login", {
         code: this.state.username,
         password: this.state.password
       })
     .then(reponse =>{
       console.log(reponse);
       if(reponse.data.status === "fail"){
        console.log("not ok");
        alert("Xin mời nhập lại.");
       }
       else{
         this.setState({
            islogin:true,
            role:reponse.data.role,
            userID:reponse.data.username,
            token:reponse.data.token
         });
         if(this.state.role === "student"){
           ReactDOM.render(
             <Student 
              username={this.state.username}
              userID={this.state.userID}
              role={this.state.role}
              token={this.state.token}
              islogin={this.state.islogin}
             />,
             document.getElementById("root")
           );
         }
         else if(this.state.role === "Monitor"){
          ReactDOM.render(
            <Monitor 
             username={this.state.username}
             token={this.state.token}
             userID={this.state.userID}
             role={this.state.role}
            />,
            document.getElementById("root")
          )
        }
        else if(this.state.role === "CVHT"){
          ReactDOM.render(
            <Covanhoctap 
             username={this.state.username}
             userID={this.state.userID}
             role={this.state.role}
            />,
            document.getElementById("root")
          )
        }   
       }
      })
     .catch(function(error) {
       console.log(error);
      });
   e.preventDefault();
  }

  render(){
    return (

      <div className="login-page">
      <div className="form">
        <h2>Trainning Point</h2>
        <form className="login-form">
          <input 
            type="text" 
            placeholder="username" 
            id="user" 
            autoFocus
            value ={this.state.username}
            onChange={(e) => this.handleChangeUsername(e)}
            />
          <input 
            type="password" 
            placeholder="password" 
            id="pass" 
            autoFocus
            value= {this.state.password}
            onChange = {(e) => this.handleChangePassword(e)}
            />
          <button type="submit" onClick={(e) => this.handleSubmit(e)} >login</button>
          <p className="message"><a href="#">Forgot password</a></p>
        </form>
      </div>
    </div>
    );
  }
}

export default Loginpage;