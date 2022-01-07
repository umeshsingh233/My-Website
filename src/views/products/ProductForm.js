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
  Dropdown
} from "react-bootstrap";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      type: "",
      discount: "",
      quantity: "",
      unit: "",
      product_img: null,
      data_url: null,
      qr_bar_code_data: null,
      scaner_torch: false,
      scaner_camera: "environment",
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

  changeHandler = (e) => {
    if (e.target.type == "file") {
      this.setState({ [e.target.name]: e.target.files[0] });
      this.preview(e.target.files[0]);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("price", this.state.price);
    data.append("type", this.state.type);
    data.append("discount", this.state.discount);
    data.append("quantity", this.state.quantity);
    data.append("unit", this.state.unit);
    data.append("product_img", this.state.product_img);
    data.append("qr_bar_code_data", this.state.qr_bar_code_data);

    const url = `${CONFIG.API_URL}/product/`;
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
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

  toggleScannerTorch = (e) => {
    if (this.state.scaner_torch == true) {
      this.setState({ scaner_torch: false });
    } else {
      this.setState({ scaner_torch: true });
    }
  };

  toggleScannerCamera = (e) => {
    console.log("toggle camera called");
    if (this.state.scaner_camera == "environment") {
      this.setState({ scaner_camera: "user" });
    } else {
      this.setState({ scaner_camera: "environment" });
    }
    console.log("toggle camera");
    this.initQR_bar_scanner2();
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
      { fps: 5, qrbox: 350 },
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
                fps: 10, // Optional, frame per seconds for qr code scanning
                qrbox: 250, // Optional, if you want bounded box UI
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

    // navigator.mediaDevices.enumerateDevices().then( (devices) => {
    //   for(var i = 0; i < devices.length; i ++){
    //       var device = devices[i];
    //       if (device.kind === 'videoinput') {
    //          let cameraId = device.deviceId;
    //          let html5Qrcode2 = new Html5Qrcode("qr_bar_reader");
    //          html5Qrcode2.start(
    //             cameraId,
    //             {
    //               fps: 10,    // Optional, frame per seconds for qr code scanning
    //               qrbox: 250  // Optional, if you want bounded box UI
    //             },
    //             this.onScanSuccess,
    //             this.onScanFailure)
    //           .catch((err) => {
    //             console.log("error occured");
    //           });
    //       }

    //   };
    // });

    this.removeExistingScanner();

    this.html5Qrcode2 = new Html5Qrcode("qr_bar_reader");

    this.html5Qrcode2
      .start(
        { facingMode: facing_mode },
        {
          fps: 10,
          qrbox: 250,
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
      // await this.html5Qrcode2.stop().then((ignore) => {
      //     console.log("QR Code scanning is stopped.");
      //   }).catch((err) => {
      //     console.log("Stop failed, handle it.");
      //   });
      //   this.html5Qrcode2 = null;
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

  handleSelect = (e) => {
    console.log(e);
    Value(e);
  };

  render() {
    const { name, price, total_price, type, discount, quantity, unit } = this.state;
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
                    {
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
                    }
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
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>total Price</label>
                          <Form.Control
                            name="total_price"
                            placeholder="Total Price"
                            value={total_price}
                            onChange={this.changeHandler}
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
                            name="type"
                            placeholder="Item Type"
                            value={type}
                            onChange={this.changeHandler}
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Discount</label>
                          <Form.Control
                            name="discount"
                            placeholder="Discount"
                            value={discount}
                            onChange={this.changeHandler}
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="3">
                        <Form.Group>
                          <label>Quantity</label>
                          <Form.Control
                            name="quantity"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={this.changeHandler}
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>

                      <Col className="pr-1">
                        <label>Units</label>
                        <Dropdown>
                          <Dropdown.Toggle
                            data-toggle="dropdown"
                            variant="default"
                            className="m-0"
                          >
                            <span className="Unit">unit</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            value={unit}
                            onSelect={this.handleSelect}
                          >
                            <Dropdown.Item  e ="unit">
                            Unit
                            </Dropdown.Item>
                            <Dropdown.Item e  ="kg">
                            kg
                            </Dropdown.Item>
                            <Dropdown.Item  e ="liter">
                            liter
                            </Dropdown.Item>
                            <Dropdown.Item e ="cm">
                            cm
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
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

export default ProductForm;
