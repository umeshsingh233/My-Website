import React, { Component } from "react";
import axios from "axios";
//import * as CONFIG from '../../config'
import ChartistGraph from "react-chartist";
import SimpleImageSlider from "react-simple-image-slider";
import * as commonFunctions from "../commonFunctions";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  style,
} from "react-bootstrap";

// const style = {
//   Padding : "150px 0",
//   fontSize : "20px"
// }

// const fadeImages = [
//   "assets/img/coca.jpg",
//   "assets/img/maggi.jpg",
//   "assets/img/milk.jpg",
//   "assets/img/oil.jpg",
//   "assets/img/rice.jpg",
// ];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let is_logged = commonFunctions.checkLoginToken();
    if (!is_logged) {
      this.props.history.push("/login");
    }
  }

  getData() {
    axios
      .get(``, {})
      .then((res) => {
        const data = res.data;
        const img = data.map((m) => <img src={m.download_url} alt="" />);
        this.setState({
          galleryItems: img,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <Container fluid>
          {/* <Col>
                <div className="slide-container">
                  <Slide>
                    <div className="each-slide">
                      <div
                        style={{backgroundImage: `url(${slideImages[0]})` }}
                      >
                        <span>Coca-Cola</span>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div
                        style={{backgroundImage: `url(${slideImages[1]})` }}
                      >
                        <span>Maggi</span>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div
                        style={{backgroundImage: `url(${slideImages[2]})` }}
                      >
                        <span>Milk</span>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div
                        style={{ backgroundImage: `url(${slideImages[3]})` }}
                      >
                        <span>Oil</span>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div
                        style={{ backgroundImage: `url(${slideImages[4]})` }}
                      >
                        <span>Rice</span>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Col> */}

          <Row>
            <Col lg="6" sm="1">
              <Card className="card-stats">
                <div className="slide-container">
                  <Fade>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/coca.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Coca-cola</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/maggi.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Maggi</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/milk.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Milk</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/oil.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Oil</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/rice.jpg").default} />
                      </div>
                      <p className="text-center">Rice</p>
                    </div>
                  </Fade>
                </div>
              </Card>
            </Col>

            <Col lg="6" sm="1">
              <Card className="card-stats">
                <div className="slide-container">
                  <Fade>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/rice.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Rice</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/milk.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Milk</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/oil.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Oil</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/maggi.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Maggi</p>
                    </div>
                    <div className="each-fade">
                      <div className="text-center">
                        <img src={require("assets/img/coca.jpg").default} />
                      </div>
                      <hr></hr>
                      <p className="text-center">Coca-cola</p>
                    </div>
                  </Fade>
                </div>
              </Card>
            </Col>

            <Col lg="12" sm="0">
              <Card className="card-stats"></Card>
            </Col>


            <Col className = "text Align: center" lg="4">
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/bread.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Bread</p>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/coffee.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Coffee</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={
                            require("assets/img/product/colgate.jpg").default
                          }
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Colgate</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Col>

            <Col lg ="4">
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/daal.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Daal</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/egg.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Eggs</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/water.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Water</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Col>

            <Col lg ="4">
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/mdh.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">MDH Masala</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className="text-center">
                        <img
                          src={require("assets/img/product/oil.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Oil</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-stats">
                  <div className="slide-container">
                    <div className="each-fade">
                      <div className = "text-center">
                        <img
                          src={require("assets/img/product/soap.jpg").default}
                        />
                      </div>
                      <hr></hr>
                      <p className="text-center">Soap</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Col>
     

            <Col lg="4">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <Card.Title as="h4">23</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="far fa-clock-o mr-1"></i>
                    Error
                  </div>
                </Card.Footer>
              </Card>
            </Col>
        
          </Row>


          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Customer Activity</Card.Title>
                  <p className="card-category">1 Day performance</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                      data={{
                        labels: [
                          "9:00AM",
                          "12:00AM",
                          "3:00PM",
                          "6:00PM",
                          "9:00PM",
                          "12:00PM",
                          "3:00AM",
                          "6:00AM",
                        ],
                        series: [
                          [15, 20, 22, 30, 32, 37, 40, 50],
                          [8, 10, 13, 16, 22, 26, 32, 40],
                          [5, 8, 9, 11, 13, 16, 19, 25],
                        ],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 50,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Open <i className="fas fa-circle text-danger"></i>
                    Visit <i className="fas fa-circle text-warning"></i>
                    Visit Second Time
                  </div>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-history"></i>
                    Updated 3 minutes ago
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Customer Statistics</Card.Title>
                  <p className="card-category">Last Campaign Performance</p>
                </Card.Header>
                <Card.Body>
                  <div
                    className="ct-chart ct-perfect-fourth"
                    id="chartPreferences"
                  >
                    <ChartistGraph
                      data={{
                        labels: ["40%", "20%", "5%"],
                        series: [40, 20, 5],
                      }}
                      type="Pie"
                    />
                  </div>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Add <i className="fas fa-circle text-danger"></i>
                    Views <i className="fas fa-circle text-warning"></i>
                    Unsubscribe
                  </div>
                  <hr></hr>
                  <div className="stats">
                    <i className="far fa-clock"></i>
                    Campaign sent 2 days ago
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">2020 Sales</Card.Title>
                  <p className="card-category">All products including Taxes</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartActivity">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "Mai",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        series: [
                          [
                            542, 443, 320, 780, 553, 453, 326, 434, 568, 610,
                            756, 895,
                          ],
                          [
                            412, 243, 280, 580, 453, 353, 300, 364, 368, 410,
                            636, 695,
                          ],
                        ],
                      }}
                      type="Bar"
                      options={{
                        seriesBarDistance: 10,
                        axisX: {
                          showGrid: false,
                        },
                        height: "245px",
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            seriesBarDistance: 5,
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Grocery Items <i className="fas fa-circle text-danger"></i>
                    Electronic Items
                  </div>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-check"></i>
                    Data information certified
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-tasks">
                <Card.Header>
                  <Card.Title as="h4">Tasks</Card.Title>
                  <p className="card-category">Backend development</p>
                </Card.Header>
                <Card.Body>
                  <div className="table-full-width">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-506045838">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-537440761">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-21130535">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Flooded: One year later, assessing what was lost and
                            what was found when a ravaging rain swept through
                            metro Detroit
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-577232198">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-773861645">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultChecked
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Create 4 Invisible User Experiences you Never Knew
                            About
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-422471719">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-829164576">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>Read "Following makes Medium better"</td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-160575228">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-922981635">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  disabled
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>Unfollow 5 enemies from twitter</td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-938342127">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-119603706">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin"></i>
                    Updated 3 minutes ago
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
