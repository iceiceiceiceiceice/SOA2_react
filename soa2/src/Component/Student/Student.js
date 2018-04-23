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

    // Lay form diem ren luyen
    createForm(){
        axios
            .post("https://training-point.herokuapp.com/get_form",{
                userID:this.state.userID
            })
            .then(response => {
                console.log(response);
                this.setState()
            })
    }
    render(){
        return (
            <div className="w3-light-grey">
            <div className="w3-bar w3-top w3-black w3-large " style={{zIndex: 4}}>
            
            <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={()=> this.openMenu()}> &nbsp;Menu</button>
           
            <span className="w3-bar-item w3-right"><button className="btn btn-lg btn-primary btn-block" onClick = {(e)=>this.Logout(e)}>Đăng xuất</button></span>
            <span className="w3-bar-item w3-right"><button className="btn btn-lg btn-primary btn-block" onClick = {(e)=>this.createForm(e)}>Tạo đơn</button></span>
            </div>
            
            <nav className="w3-sidebar w3-collapse w3-grey w3-animate-left" style={{zIndex: 3, width: 300}} id="mySidebar"><br />
            <span>Welcome, <strong>{this.state.username}</strong></span>
            <hr />
            
            <div className="w3-bar-block ">
               
            </div>
            </nav>
        
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={() => this.closeMenu()} style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />
        
            <div className="w3-main w3-light-grey" style={{marginLeft: 300, marginTop: 43}}>

            <header className="w3-container" style={{paddingTop: 22}}>
                <h5><b><i className="fa fa-dashboard" /> Thông báo điểm rèn luyện</b></h5>
            </header>
            <table className="table table-condensed table-bordered table-striped">
        <tbody>
          <tr>
            <td>STT</td>
            <td>Họ và tên</td>
            <td>Điểm 1</td>
            <td>Điểm 2</td>
            <td>Điểm 3</td>
            <td>Lớp trưởng</td>
            <td>CVHT</td>
            <td>trạng thái</td>
            <td>hành động</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Triệu Hoàng An</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td><p>done</p></td>
            <td><p>done</p></td>
            <td>done</td>
            <td />
          </tr>
        </tbody>
      </table>
         </div>
        </div>
        );

    }
}
export default Student;