import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import * as CONFIG from "../../config";
import axios from "axios";

class NewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      department: "",
      salary: "",
      contect: "",
      address: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("department", this.state.department);
    data.append("salary", this.state.salary);
    data.append("contect", this.state.contect);
    data.append("address", this.state.address);

    const url = `${CONFIG.API_URL}/employee/`;
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
            alert("employee created id = " + response.data.employee_id);
          } else {
            alert(
              "employee create error occured " +
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
    const { name, department, salary, contect, address } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">New Employee</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Name</label>
                          <Form.Control
                            name="name"
                            placeholder="Full Name"
                            type="text"
                            value={name}
                            onChange={this.changeHandler}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Department</label>
                          <Form.Control
                            name="department"
                            placeholder="Department"
                            type="text"
                            value={department}
                            onChange={this.changeHandler}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Salary</label>
                          <Form.Control
                            name="salary"
                            placeholder="Salary"
                            type="text"
                            value={salary}
                            onChange={this.changeHandler}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Contect</label>
                          <Form.Control
                            name="contect"
                            placeholder="Contect"
                            type="text"
                            value={contect}
                            onChange={this.changeHandler}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            name="address"
                            placeholder="Full Address"
                            type="text"
                            value={address}
                            onChange={this.changeHandler}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                      onClick={this.submitHandler}
                    >
                      Add Employee
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

export default NewEmployee;
