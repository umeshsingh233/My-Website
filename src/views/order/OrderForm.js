import React from "react";
import axios from "axios";
import * as CONFIG from '../../config'
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qr_bar_code_data: null,
      scaner_camera: "environment",

      shop_products: [
        {
          id: 1,
          name: "daal",
          quntitiy: 32,
          unit: "kg",
          price: 23.3,
          discount_price: 20.0,
          discount_percent: 10,
          qr_bar_data: "jaksdfj898a0dsfjk",
        },
        {
          id: 3,
          name: "maggi",
          quntitiy: 32,
          unit: "kg",
          price: 23.3,
          discount_price: 20.0,
          discount_percent: 10,
          qr_bar_data: "7777",
        },
      ],
      cart_products: [
        {
          product_id: 1,
          quntitiy: 4,
          price: 20,
          discount_price: 20.0,
          discount_percent: 10,
          total_price: 22,
        },
        {
          product_id: 3,
          quntitiy: 4,
          price: 20,
          discount_price: 20.0,
          discount_percent: 10,
          total_price: 22,
        },
      ],
      customer_info: {
        name: "ajdkf akjsdf",
        phone: "92039949093",
        address: "asdfadsf adsfadsf",
      },
    };
  }

  html5Qrcode2 = null;
  preview = (file) => {
    const reader = new FileReader();

    this.onimgload = () => {
      this.setState({ data_url: reader.result });
    };
    reader.addEventListener("load", this.onimgload, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  onScanSuccess = (decodedText, decodedResult) => {
    // handle the scanned code as you like, for example:
    if (decodedText && decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      this.setState({ qr_bar_code_data: decodedResult });
    }
  };

  onScanFailure = (error) => {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  };
  initQR_bar_scanner = () => {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "qr_bar_reader",
      { fps: 5, qrbox: 400 },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
    console.log("html5QrcodeScanner object");
    console.log(html5QrcodeScanner);
  };

  initQR_bar_scanner2 = () => {
    let facing_mode = this.state.scaner_camera;
    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          var cameraId = devices[0].id;

          html5QrCode
            .start(
              cameraId,
              {
                fps: 10,
                qrbox: 300,
              },
              this.onScanSuccess,
              this.onScanFailure
            )
            .catch((err) => {
              console.log("error occured");
            });
        }
      })
      .catch((err) => {
        console.log("error while fetching camera list");
      });
    this.removeExistingScanner();

    this.html5Qrcode2 = new Html5Qrcode("qr_bar_reader");

    this.html5Qrcode2
      .start(
        { facingMode: facing_mode },
        {
          fps: 10,
          qrbox: 300,
        },
        this.onScanSuccess,
        this.onScanFailure
      )
      .catch((err) => {
        console.log("error occured");
      });
    console.log(this.html5Qrcode2);
    console.log("Scanner started");
  };
  componentDidMount() {
    this.initQR_bar_scanner();
    this.initQR_bar_scanner2();
  }
  componentWillUnmount() {
    this.removeExistingScanner();
  }
  removeExistingScanner = () => {
    if (this.html5Qrcode2) {
      this.html5Qrcode2.stop();
      this.html5Qrcode2.clear();
      this.html5Qrcode2 = null;
      console.log("scanner cleared");
    }
    return true;
  };

  setData = (result) => {
    this.setState({ qr_bar_code_data: result });
  };

  chnage_quantity = (product_id, action) => {
    if (action == "remove") {
      //remove
    } else {
      //add
    }
  };

  render() {
    const { name, price, total_price } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="10">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Add New Order</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="4">
                        <h4>Scan QR or Bar code</h4>
                        <div style={{ minHeight: "388px" }}>
                          <div id="qr_bar_reader" width="500px"></div>
                        </div>
                        {/* <br />
                          <Button onClick={this.toggleScannerTorch}>
                            Toggle flash light
                          </Button>
                          <span>&nbsp;&nbsp;</span>
                          <Button onClick={this.toggleScannerCamera}>
                            Toggle Camera
                          </Button>
                          <br /> */}
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
                    <Row>
                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        All Products List
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Row>
                  </Form>
                  <Form>
                  <Row>
                      <Col className="pr-1" md="10">
                        <Form.Group>
                          <Form.Control
                            placeholder="product 1"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="10">
                        <Form.Group>
                          <Form.Control
                            placeholder="product 2"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    </Form>
                  
                  {this.state.cart_products.map((row, key) => (
                    <div key={key}>
                      <span>{row.name}</span> &nbsp;{" "}
                      {row.quantity * row.discount_price} {row.quantity}{" "}
                      <Button
                        onClick={this.chnage_quantity(row.product_id, "remove")}
                      >
                        {" "}
                        -{" "}
                      </Button>{" "}
                      <Button onClick={this.chnage_quantity(row.id, "add")}>
                        {" "}
                        +{" "}
                      </Button>
                    </div>
                  ))}

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
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Save Order
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

export default OrderForm;
