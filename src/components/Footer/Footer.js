import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <Link to ="./dashboard">
                  Home
                </Link>
              </li>
              <li>
                <Link to ="./orders">
                  My Cart 
                </Link>
              </li>
              <li>
                <Link to ="#pablo" >
                  Wallet
                </Link>
              </li>
              <li>
                <Link to ="./about" >
                  About Us
                </Link>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <Link to ="/">My Shop</Link>
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
