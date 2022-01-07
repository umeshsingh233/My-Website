import React from "react";
import axios from "axios";
import {Form, Button}from "react-bootstrap";
import { Link,} from "react-router-dom";
import * as CONFIG from '../../config'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name: "",
     username: "",
     email: "",
     password: "",
     address : "",
     action : "signup",
  };
 }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  handleSubmit = (e) => {
     e.preventDefault();
     const data = new FormData();
     data.append("name", this.state.name);
     data.append("username", this.state.username);
     data.append("email", this.state.email);
     data.append("password", this.state.password);
     data.append("address", this.state.address);
     data.append("action", "signup");

     const url = `${CONFIG.API_URL}/user/signup`;
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
             alert("user created id = " + response.data.user_id);
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
    const {name, username, email, password, address} = this.state;
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Register Here :</div>
          <div className="card-body">
            <Form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div Register="form-label-group">
                <label htmlFor="inputName">Full Name</label>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    onChange={this.changeHandler}
                    required
                  />
                </div>
              </div>
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
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                <label htmlFor="inputEmail">Email Address</label>
                  <input
                    id="inputEmail"
                    className={"form-control"}
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    onChange={this.changeHandler}
                    autoFocus
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Email. or Email Exist
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
                <div Register="form-label-group">
                <label htmlFor="inputName">Address</label>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Address"
                    name="address"
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
                  Register
                </Button>
              </div>
            </Form>
            <div className="text-center">
              <Link className="d-block small mt-1" to={"LogIn"}>
                Login Your Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
