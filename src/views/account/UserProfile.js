import React from "react";
import axios from "axios";
import * as CONFIG from '../../config'
import * as commonFunctions from '../../commonFunctions'

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    var self = this;
    
    let hdr_rtn = commonFunctions.getAuthHeader();
    if(!hdr_rtn.is_logged){
      alert("Login expired");
      this.props.history.push("/login");
      return false;
    }
    let headers = {};
    headers[hdr_rtn["header_name"]] = hdr_rtn["header_val"];

    const url = `${CONFIG.API_URL}/user/`;
     axios
      .get(url,  { headers:  headers})
      .then((response) => {
        console.log(response)
        this.setState({
          userData : response.data.user,
          totalItems: response.data.user.length,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  // editUser = (e) => {
  //   // this.props.history.push("./user/detail/");
  // };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="6">
              <Card className="card-user">
                <div className="card-image">
                  <img
                    alt="..."
                    src={
                      require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                        .default
                    }
                  ></img>
                </div>

               <Card.Body>
                  <div className="author">
                    <a href="###" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/faces/face-1.jpg").default}
                      ></img>
                        <h5 className="title">Admin</h5>
                    </a>
                  </div>

                   {/* <>
                    <thead className="description text-center">
                      <tr>
                        <th className="text-primary border">ID : </th>
                        <th className="text-primary border">Name : </th>
                        <th className="text-primary border">Username : </th>
                        <th className="text-primary border">Email : </th>
                        <th className="text-primary border">Address : </th>
                      </tr>
                    </thead>
                  <tbody>
                      {this.state.userData.map((row, key) => (
                        <tr key={key}>
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.username}</td>
                          <td>{row.email}</td>
                          <td>{row.address}</td>
                        </tr>
                      ))}
                    </tbody>
                    </> */}

                </Card.Body> 

                <hr></hr>
                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-facebook btn-icon"
                    onClick={() => window.open("https://www.facebook.com")}
                  >
                    <i className="fab fa-facebook"></i>
                  </Button>
                  <Button
                    className="btn-twitter btn-icon"
                    onClick={() => window.open("https://twitter.com")}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-google btn-icon"
                    onClick={() => window.open("https://mail.google.com")}
                  >
                    <i className="fab fa-google-plus-square"></i>
                  </Button>
                </div>
              </Card>
            </Col>

            <Col md="6">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Col md="">
                      <Form.Group>
                        <label>Full Name</label>
                        <Form.Control
                          placeholder="Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="">
                      <Form.Group>
                        <label>Email address</label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                      <Col md="">
                        <Form.Group>
                          <label>About Me</label>
                          <Form.Control
                            cols="80"
                            placeholder="Here can be your description"
                            rows="4"
                            as="textarea"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button>
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
