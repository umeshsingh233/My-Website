import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Media,
} from "reactstrap";
import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    let custom_paths = {
      "employee/detail": "Employee Details",
      "order/detail": "Order Details",
    };

    for (const key in custom_paths) {
      if (location.pathname.indexOf(key) !== -1) {
        return custom_paths[key];
      }
    }
    return "Shop";
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="/admin/dashboard"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle="dropdown"
                href="/admin/dashboard"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >
                <i className="nc-icon nc-palette"></i>
                <span className="d-lg-none ml-1">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-bell-55"></i>
                <span className="notification">2</span>
                <span className="d-lg-none ml-1">Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 1
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Notification 2
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-1"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <button
                    className="btn btn-outline-success my-0 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav>
                <UncontrolledDropdown nav>
                  <DropdownToggle className="m-0 p-0" nav>
                    <Media className="align-items-center">
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/new_logo.png").default}
                      />
                      <Media className="ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          Admin
                        </span>
                      </Media>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem className="noti-title">
                      <h6 className="text-overflow m-0">Welcome !</h6>
                    </DropdownItem>
                    <DropdownItem to="./user" tag={Link}>
                      My profile
                    </DropdownItem>
                    <DropdownItem to="####" tag={Link}>
                      Wallet
                    </DropdownItem>
                    <DropdownItem to="./orders" tag={Link}>
                      Order
                    </DropdownItem>
                    <DropdownItem to="####" tag={Link}>
                      Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="####"
                      onClick={(e) => e.preventDefault()}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
