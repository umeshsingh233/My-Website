import React from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
class CustomerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="10">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Customer Details</Card.Title>
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
                          <label>Mobile Number</label>
                          <Form.Control
                            placeholder="Mobile Number"
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
                            placeholder="Home Address"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                            placeholder="Your Current City"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>Pincode</label>
                          <Form.Control
                            placeholder="Pincode"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
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
      </div>
    );
  }
}

export default CustomerDetail;
