import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './bootstrap/css/an.css';
import './bootstrap/css/w3c.css';
import Loginpage from '../Loginpage';
import './bootstrap/css/bootstrap.min.css';

class Student extends Component{
    constructor(props){
        super(props);
        this.state= {
            username: this.props.username,
            userID: this.props.userID,
            Name:"",
            pointid: null,
            point_1: 0,
            point_2: 0,
            point_3: 0,
            student_verify: false,
            monitor_verify:false,
            cvht_verify:false,
            message: null,
            messageNew: null,
            token:this.props.token,
            role:this.props.role,
            islogin:this.props.islogin
        };
    }
    // dang xuat
    Logout(e){
        this.setState({
            islogin:false
        });
        ReactDOM.render(
            <Loginpage 
                islogin={this.state.islogin}
            />,
            document.getElementById("root")
            
        );
        console.log(this.state.islogin);
    }
    getPoint(){
        axios
            .get("https://training-point.herokuapp.com/points/1")
    }
    // Lay form diem ren luyen
    createForm(){
        ReactDOM.render(
            <Student 
                username={this.state.username}
                islogin={this.state.islogin}
                role={this.state.role}
                token={this.props.token}
                username= {this.props.username}
                userID= {this.props.userID}
            />,
            document.getElementById("root")
        )
    }
    handelName(event){
        this.setState({
            Name:event.target.value
        });
    }
    handelPoint1(event){
        this.setState({
            point_1:event.target.value
        });
    }
    handelPoint2(event){
        this.setState({
            point_2:event.target.value
        });
    }
    handelPoint3(event){
        this.setState({
            point_3:event.target.value
        });
    }
    SubmitPoint(event){

    }
    GetForm(event){
        axios
            .get("https://training-point.herokuapp.com/get_form")
            .then(Response =>{
                this.setState({
                    
                });
            })
    }
    render(){
        return (
            <div className="w3-light-grey">
            {/*thanh bar chua cac muc dang xuat */}
            <div className="w3-bar w3-top w3-black w3-large " style={{zIndex: 4}}>
            
            <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={()=> this.openMenu()}> &nbsp;Menu</button>
           
            <span className="w3-bar-item w3-right"><button className="btn btn-primary btn-block" onClick = {(e)=>this.Logout(e)}>Đăng xuất</button></span>
            <span className="w3-bar-item w3-right"><button className="btn btn-primary btn-block" onClick = {(e)=>this.createForm(e)}>Tạo đơn</button></span>
            <span className="w3-bar-item w3-right"><button className="btn btn-primary btn-block" onClick = {(e)=>this.GetForm(e)}>Xem các đơn</button></span>
            </div>
            {/*Side bar, dung do trong man hinh */}
            <nav className="w3-sidebar w3-collapse w3-grey w3-animate-left" style={{zIndex: 3, width: 300}} id="mySidebar"><br />
            <span>Welcome, <strong>{this.state.username}</strong></span>
            <hr />
            
            <div className="w3-bar-block ">
               
            </div>
            </nav>
            
            <div className="w3-overlay w3-hide-large w3-animate-opacity" id="main" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />
        
            <div className="w3-main w3-white" style={{marginLeft: 300, marginTop: 43}}>

            <header className="w3-container" style={{paddingTop: 22}}>
                <h5><b><i className="fa fa-dashboard" /> Thông báo điểm rèn luyện</b></h5>
            </header>
            {/*Phan chinh cua trang web */}
            <table className="table table-condensed table-bordered table-striped">
                
                <tbody>
                    <tr>
                        <td>STT</td>
                        <td>Họ và tên</td>
                        <td>Điểm 1</td>
                        <td>Điểm 2</td>
                        <td>Điểm 3</td>
                        <td>hành động</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="text" onChange={(e)=> this.handelName(e)}></input></td>
                        <td><input type="text" onChange={(e)=> this.handelPoint1(e)}></input></td>
                        <td><input type="text" onChange={(e)=> this.handelPoint2(e)}></input></td>
                        <td><input type="text" onChange={(e)=> this.handelPoint3(e)}></input></td>
                        <td><button type="submit" className="btn btn-primary" onClick={(e) => this.SubmitPoint(e)}>Gửi</button></td>
                    </tr>
                </tbody>

            </table>
         </div>
        </div>
        );

    }
}
export default Student;