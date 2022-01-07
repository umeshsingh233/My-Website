import React from "react";
import axios from "axios";
import {Form, Button}from "react-bootstrap";
import { Link,} from "react-router-dom";
import * as CONFIG from '../../config'

class SignIn extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
     username: "",
     password: "",
  };

  //this.history = props.history;

 }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });  
  };

  componentDidMount() {
  }

  handleSubmit = (e) => {
     e.preventDefault();
     const data = new FormData();
     data.append("username", this.state.username);
     data.append("password", this.state.password);
     data.append("action", "login");


     const url = `${CONFIG.API_URL}/user/login`;
     axios
       .post(url, data, {
         headers: {
           "Content-Type": "text/plain",
         },
       })
       .then((response) => {
         console.log(response);
         if (response.status == 200) {
           if (response.data.status == "success") {
             localStorage.setItem("JWT_TOKEN", response.data.JWT_TOKEN);
             localStorage.setItem("LOGIN_TIME", response.data.LOGIN_TIME);
             localStorage.setItem("LOGIN_EXPIRY_TIME", response.data.LOGIN_EXPIRY_TIME);

              let dashboard_url = "/admin/dashboard"
              this.props.history.push(dashboard_url);
           } else {
             alert(
               "user create error occured " +
                 response.data.msg +
                 " " +
                 response.data.error_code
             );
           }
         }
       })
       .catch((error) => {
         console.log(error);
       });
   };

  render() {
    //const {username, password} = this.state;
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login :</div>
          <div className="card-body">
            <Form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div Register="form-label-group">
                <label htmlFor="inputName">Username</label>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    onChange={this.changeHandler}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Username.
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="*********"
                    name="password"
                    onChange={this.changeHandler}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <Button
                  className="btn btn-primary"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
            <div className="text-center">
              <Link className="d-block small mt-1" to={"SignUp"}>
               Register Your Account
              </Link>
              <Link className="d-block small" to={"#"}>
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
