import React from "react";
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import axios from "axios";
import * as CONFIG from '../../config'
import { Link, useHistory } from "react-router-dom";

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0,
      orderList: [],
    };
    // this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  NewOrder = (e) => {
    this.setState((prevState, props) => {
      return { totalItems: (prevState.totalItems = 1) };
    });
    this.props.history.push("./add-Orders");
  };

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    var self = this;

    const url = `${CONFIG.API_URL}/order/`;
    return axios
      .get(url)
      .then((response) => {
        this.setState({
          orderList: response.data.orders,
          totalItems: response.data.orders.length,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  viewDetails = () => {};

  editOrder = () => {};

  deleteOder = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return false;
    }
    axios
      .delete(`${CONFIG.API_URL}/order/${id}/`)
      .then((response) => {
        if (response.data.status == "success") {
          alert("Successfully deleted");

          var new_arr = this.state.orderList.filter(function (item) {
            return item.id !== id;
          });

          this.setState({
            orderList: new_arr,
            totalItems: new_arr.length,
          });
        } else {
          alert("something went wrong " + response.data.msg);
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
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Order List</Card.Title>
                  <p className="card-category">
                    Total Orders : {this.state.totalItems}
                  </p>
                  <div>
                    <Button
                      className="btn-fill pull-right"
                      onClick={this.NewOrder}
                    >
                      New Order
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="text-primary border">ID</th>
                        <th className="text-primary border">Name</th>
                        <th className="text-primary border">Contect</th>
                        <th className="text-primary border">Address</th>
                        <th className="text-primary border">Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.orderList.map((row, key) => (
                        <tr key={key}>
                         <td>
                          <Link to={`/admin/orders/detail/${row.id}/0`}>
                            {row.id}
                          </Link>
                          </td>
                          <td>
                          <Link to={`/admin/orders/detail/${row.id}/0`}>
                            {row.name}
                          </Link>
                          </td>
                          <td>{row.contect}</td>
                          <td>{row.address}</td>

                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  View Product..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="nc-cart-simple"
                                onClick={this.viewDetails}
                                type="button"
                                variant="info"
                              ></Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  Edit Order..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                onClick={this.editOrder}
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
                                onClick={() => this.deleteOder(row.id)}
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OrderList;
