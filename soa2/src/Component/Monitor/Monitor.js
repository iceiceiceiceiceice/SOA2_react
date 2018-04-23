import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import '../bootstrap/css/an.css'
import '../bootstrap/css/w3c.css';
import Loginpage from '../Loginpage';
import '../bootstrap/css/bootstrap.min.css';

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state= {
            username: this.props.username,
            userID: this.props.userID,
            pointid: null,
            point_1: 0,
            point_2: 0,
            point_3: 0,
            student_verify: false,
            monitor_verify:false,
            cvht_verify:false,
            message: null,
            messageNew: null,
        };
    }

}
export default Monitor;
