import React, { Component } from 'react';
import * as action from './../../redux/action/index';
import {connect} from 'react-redux';

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            taiKhoan : '' , 
            matKhau : '' ,

        }
    }
    handleOnChange = (event) =>{
        const {name , value} = event.target;
        this.setState({
            [name] : value
        },()=>{
            console.log(this.state);
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props);
        this.props.login(this.state, this.props.history);
    }
    render() {
        return (
            <div className="container">
            
            <div className="row">
              <div className="col-sm-6 mx-auto">
              <h3>Admin</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" 
                            name="taiKhoan" 
                            onChange={this.handleOnChange} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" 
                            name="matKhau"
                            onChange={this.handleOnChange}/>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
    
        )
    }
}

const mapDispatchToProp = dispatch =>{
    return {
       login : (user ,history) => {
           dispatch(action.actLoginAdminAPI(user , history));
       }
    }
}

export default connect(null,mapDispatchToProp) (Admin);
