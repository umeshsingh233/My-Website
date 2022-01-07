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
import SimpleImageSlider from "react-simple-image-slider";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import * as CONFIG from "../../config";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0,
      productList: [],
      // images = [
      //   { url: "../../assets/slider/coca-cola.jpg" },
      //   { url: "../../assets/slider/maggi.jpg" },
      //   { url: "../../assets/slider/milk.jpg" },
      //   { url: "../../assets/slider/oil.jpg" },
      //   { url: "../../assets/slider/rice.jpg" },
      // ]
    };
    // this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  AddProduct = (e) => {
    this.props.history.push("./add-product");
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    var self = this;
    const url = `${CONFIG.API_URL}/product/`;
    return axios
      .get(url)
      .then((response) => {
        this.setState({
          productList: response.data.products,
          totalItems: response.data.products.length,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

  editProduct = (e) => {
    this.props.history.push("./products/detail/");
  };

  deleteProduct = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return false;
    }
    axios
      .delete(`${CONFIG.API_URL}/product/${id}/`)
      .then((response) => {
        if (response.data.status == "success") {
          alert("Successfully deleted");

          var new_arr = this.state.productList.filter(function (item) {
            return item.id !== id;
          });
          this.setState({
            productList: new_arr,
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

  imgZoom = (e) => {};

  render() {
    return (
      
      <div>
      {/* <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
      />
      </div> */}
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Products List</Card.Title>
                  <p className="card-category">
                    Grocery Items total {this.state.totalItems} Items.
                  </p>
                  <div>
                    <Button
                      className="btn-fill pull-right"
                      onClick={this.AddProduct}
                    >
                      Add Product
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="text-primary border">ID</th>
                        <th className="text-primary border">Name</th>
                        <th className="text-primary border">Price</th>
                        <th className="text-primary border">Total Price</th>
                        <th className="text-primary border">Type</th>
                        <th className="text-primary border">Discount</th>
                        <th className="text-primary border">Quantity</th>
                        <th className="text-primary border">Units</th>
                        <th className="text-primary">Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.productList.map((row, key) => (
                        <tr key={key}>
                          <td>
                            <Link to={`/admin/products/detail/${row.id}/0`}>
                              {row.id}
                            </Link>
                          </td>
                          <td>
                            <Link to={`/admin/products/detail/${row.id}/0`}>
                              {row.name}
                            </Link>
                          </td>
                          <td>{row.price} Rs</td>
                          <td>{row.total_price} Rs</td>
                          <td>{row.type}</td>
                          <td>{row.discount} %</td>
                          <td>{row.quantity}</td>
                          <td>{row.units}</td>
                          <td>
                            {row.image}
                            <a
                              className="avatar avatar-sm"
                              href=""
                              id=""
                              onClick={(e) => e.imgZoom()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={
                                  require("../../assets/img/new_logo.png")
                                    .default
                                }
                              />
                            </a>
                            <a
                              className="avatar avatar-sm"
                              href=""
                              id=""
                              onClick={(e) => e.imgZoom()}
                            >
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={
                                  require("../../assets/img/mask.png").default
                                }
                              />
                            </a>
                          </td>

                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  Edit Product..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                onClick={this.editProduct}
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
                                onClick={() => this.deleteProduct(row.id)}
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
                  <>
                    <nav aria-label="Page navigation example">
                      <Pagination
                        className="pagination justify-content-center"
                        listClassName="justify-content-center"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductList;
