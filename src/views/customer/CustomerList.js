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

class CustomerList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      totalCustomers : 1,
      customersList:[]
     };
  }

  AddCustomer = (e) => {
    this.setState((prevState, props) => {
      return { totalItems: prevState.totalItems=1};
    });
    this.props.history.push("./add-customer");
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Customer List</Card.Title>
                  <p className="card-category">
                  Total Customers :{this.state.totalCustomers}
                  </p>
                  <div>
                    <Button
                      className="btn-fill pull-right"
                      onClick={this.AddCustomer}
                    >
                      Add Customers
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Contect</th>
                        <th className="border-0">Address</th>
                        <th className="border-0">City</th>
                        <th className="border-0">Pincode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mohit</td>
                        <td>9876543210</td>
                        <td>B-2, New Delhi</td>
                        <td>Noida</td>
                        <td>597164</td>
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

export default CustomerList;
