import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import '../bootstrap/css/an.css'
import '../bootstrap/css/w3c.css';
import Loginpage from '../Loginpage';
import '../bootstrap/css/bootstrap.min.css';

class Covanhoctap extends Component{
    constructor(props){
        super(props);
        this.state= {
            username: this.props.username,
            userID: this.props.userID,
            student_verify: false,
            monitor_verify:false,
            cvht_verify:false,
            message: null,
            messageNew: null,
        };
    }
    
}
export default Covanhoctap;