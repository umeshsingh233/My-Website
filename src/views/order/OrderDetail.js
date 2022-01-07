import React from "react";
import axios from "axios";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import * as CONFIG from "../../config";

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_id: props.match.params.id,
      is_edit: props.match.params.is_edit,
      order: {},
    };
    console.log("props");
    console.log(props.match.params.id);
  }

  componentDidMount() {
    this.getOrderDetails();
  }
  getOrderDetails = () => {
    var self = this;
    const url = `${CONFIG.API_URL}/order/${this.state.order_id}`;
    return axios
      .get(url)
      .then((response) => {
        this.setState({
          order: response.data.order,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  submitHandler = (id) => {
    e.preventDefault();
    const OrderDetail = {
      id: this.state.id,
      name: this.state.name,
      contect: this.state.contect,
      address: this.state.address,
    };
    axios
      .put(`${CONFIG.API_URL}/order/${id}/`, OrderDetail)
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
            <Col md="10">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Order Details : </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <label>Name</label>
                        <br />
                        <span>{this.state.order.name}</span>
                      </Col>
                      <Col className="pr-1" md="5">
                        <label>Contect</label>
                        <br />
                        <span>{this.state.order.contect}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="10">
                        <label>Address</label>
                        <br />
                        <span>{this.state.order.address}</span>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <>
          <Container fluid>
            <Row>
              <Col md="10">
                <Card>
                  <Card.Header>
                    <Card.Title as="h4">Edit Order : </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="5">
                          <Form.Group>
                            <label>Name</label>
                            <Form.Control
                              placeholder="Full Name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="5">
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
                        <Col className="pr-1" md="10">
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

export default OrderDetail;
