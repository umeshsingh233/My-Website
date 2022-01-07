import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import * as CONFIG from '../../config'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.match.params.id,
      is_edit: props.match.params.is_edit,
      product : {},
    };
    console.log("props");
    console.log(props.match.params.id);
  }

  componentDidMount() {
    this.getProductDetails();
  }
  getProductDetails = () => {
    var self = this;

    const url = `${CONFIG.API_URL}/product/${this.state.product_id}`;
    return axios
      .get(url)
      .then((response) => {
        this.setState({
          product: response.data.product,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  submitHandler = (id) => {
    e.preventDefault();
    const ProductDetail = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      type: this.state.type,
      discount: this.state.discount,
      quantity: this.state.quantity,
      product_img: this.state.product_img,
    };
    axios
      .put(`${CONFIG.API_URL}/product/${id}/`, ProductDetail)
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
                  <Card.Title as="h4">Product Details</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="4">
                        <label>Name</label>
                        <br />
                        <span>{this.state.product.name}</span>
                      </Col>
                      <Col className="pr-1" md="4">
                        <label>Price</label>
                        <br />
                        <span>{this.state.product.price}</span>
                      </Col>
                      <Col className="pr-1" md="4">
                        <label>Total Price</label>
                        <br />
                        <span>{this.state.product.total_price}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <label>Type</label>
                        <br />
                        <span>{this.state.product.type}</span>
                      </Col>
                      <Col className="pr-1" md="4">
                        <label>Discount</label>
                        <br />
                        <span>{this.state.product.discount}</span>
                      </Col>
                      <Col className="pr-1" md="4">
                        <label>Quantity</label>
                        <br />
                        <span>{this.state.product.quantity}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <img
                          src={CONFIG.API_URL + "/" + this.state.product.product_image}
                          style={{ width: "200px", height: "auto" }}
                        />
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div>
          <Container fluid>
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title as="h4">Edit Product</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>Name</label>
                            <Form.Control
                              placeholder="Item Name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                          <span>{this.state.product.name}</span>
                        </Col>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>Price</label>
                            <Form.Control
                              placeholder="Price"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>total Price</label>
                            <Form.Control
                              placeholder="Total Price"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>Type</label>
                            <Form.Control
                              placeholder="Item Type"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>Discount</label>
                            <Form.Control
                              placeholder="Discount"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>Quantity</label>
                            <Form.Control
                              placeholder="Quantity"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        className="btn-fill pull-rightr"
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
        </div>
      </div>
    );
  }
}

export default ProductDetail;
