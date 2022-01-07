import React from "react";
import axios from "axios";
import * as CONFIG from "../../config";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      product_img: null,
      price: "",
      //qr_bar_code_data: null,
      //scaner_torch: false,
      //scaner_camera: "environment",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("product_img", this.state.product_img);
    data.append("price", this.state.price);
    //data.append("qr_bar_code_data", this.state.qr_bar_code_data);

    const url = `${CONFIG.API_URL}/product/`;
    axios
      .post(url, data, {
        headers: {
          "Content-Type" : "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          if (response.data.status == "success") {
            alert("product created id = " + response.data.product_id);
          } else {
            alert(
              "product create error occured " +
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
    const { name, price} = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Add New Product</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    {/*
                      <Row>
                        <Col className="pr-1" md="4">
                          <h4>Scan QR or Bar code</h4>
                          <div style={{ minHeight: "388px" }}>
                            <div id="qr_bar_reader" width="500px"></div>
                          </div>
                          <br />
                          <Button onClick={this.toggleScannerTorch}>
                            Toggle flash light
                          </Button>
                          <span>&nbsp;&nbsp;</span>
                          <Button onClick={this.toggleScannerCamera}>
                            Toggle Camera
                          </Button>
                          <br />
                          <Form.Group>
                            <label>QR/ BAR code data</label>
                            <Form.Control
                              name="qr_bar_code_data"
                              placeholder="QR/ BAR code data"
                              value={this.state.qr_bar_code_data}
                              onChange={this.changeHandler}
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    */}
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Name</label>
                          <Form.Control
                            name="name"
                            placeholder="Item Name"
                            value={name}
                            onChange={this.changeHandler}
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Price</label>
                          <Form.Control
                            name="price"
                            placeholder="Price"
                            value={price}
                            onChange={this.changeHandler}
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <img src={this.state.image} />
                          <label>Select Image</label>
                          <Form.Control
                            name="product_img"
                            type="file"
                            onChange={this.changeHandler}
                          ></Form.Control>
                          <br />
                          <img
                            src={this.state.data_url}
                            style={{ width: "100px", height: "auto" }}
                            roundedCircle
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                      onClick={this.submitHandler}
                    >
                      Save
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

export default ImageForm;
