import React from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class SellerList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      totalItems :1,
      SellerList : [],
    };
  }

  Seller = (e) => {
    this.setState((prevState, props) => {
      return { totalItems: prevState.totalItems=1};
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
                  <Card.Title as="h4">Shopkeeper List</Card.Title>
                  <p className="card-category">
                    Total Seller : {this.state.totalItems}
                    </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">address</th>
                        <th className="border-0">Type</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>101</td>
                        <td>John</td>
                        <td>C Block Mumbai</td>
                        <td>Whole Seller</td>
                      </tr>
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

export default SellerList;
