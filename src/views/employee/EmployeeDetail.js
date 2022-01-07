import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import * as CONFIG from "../../config";
import axios from "axios";

class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_id: props.match.params.id,
      is_edit: props.match.params.is_edit,
      employee: {},
    };
    console.log("props");
    console.log(props.match.params.id);
  }
  componentDidMount() {
    this.getEmployeeDetails();
  }
  getEmployeeDetails = () => {
    var self = this;

    console.log("get Employee");
    const url = `${CONFIG.API_URL}/employee/${this.state.employee_id}`;
    return axios
      .get(url)
      .then((response) => {
        this.setState({
          employee: response.data.employee,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  submitHandler = (id) => {
    e.preventDefault();
    const EmployeeDetail = {
      id: this.state.id,
      name: this.state.name,
      department: this.state.department,
      salary: this.state.salary,
      contect: this.state.contect,
      address: this.state.address,
    };
    axios
      .put(`${CONFIG.API_URL}/employee/${id}/`, EmployeeDetail)
      .then((response) => {
        if (response.data.status == "success") {
          alert("Successfully updated");
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Employee Details :</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Name</label>
                        <br />
                        <span>{this.state.employee.name}</span>
                      </Col>
                      <Col className="pr-1" md="6">
                        <label>Department</label>
                        <br />
                        <span>{this.state.employee.department}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Salary</label>
                        <br />
                        <span>{this.state.employee.salary}</span>
                      </Col>
                      <Col className="pr-1" md="6">
                        <label>Contect</label>
                        <br />
                        <span>{this.state.employee.contect}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="8">
                        <label>Address</label>
                        <br />
                        <span>{this.state.employee.address}</span>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col className="pr-1" md="4">
                        <img
                          src={CONFIG.API_URL + "/" + this.state.employee.employee_image}
                          style={{ width: "200px", height: "auto" }}
                        />
                      </Col>
                    </Row> */}
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <>
          <Container fluid>
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title as="h4">Edit Employee :</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Name</label>
                            <Form.Control
                              placeholder="Full Name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Department</label>
                            <Form.Control
                              placeholder="Department"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Salary</label>
                            <Form.Control
                              placeholder="Salary"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Contect</label>
                            <Form.Control
                              placeholder="Contect"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="12">
                          <Form.Group>
                            <label>Address</label>
                            <Form.Control
                              placeholder="Full Address"
                              type="text"
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
                        Submit
                      </Button>
                      <div className="clearfix"></div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      </div>
    );
  }
}

export default EmployeeDetail;
