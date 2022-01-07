import { data } from "jquery";
import React, { Component } from "react";
import QrReader from "react-qr-scanner";

class QRScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: {text:null},
    };

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data) {
    console.log(data);
    if(data){
      this.setState({
        result: data,
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: 400,
      width: 500,
      display: "flex",
      "justify-content": "center",
    }

    const camStyle = {
      display: "flex",
      justifyContent: "center",
      marginTop: "-100px",
    }

    const textStyle = {
      fontSize: "30px",
      "text-align": "center",
      marginTop: "-5px",
    }
    return (
      <React.Fragment >
        <div style={camStyle}>
          <div style={textStyle}>
            <QrReader
              delay={100}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              legacyMode={true}
            />
          </div>
        </div>
        <p style={textStyle}>result is {this.state.result.text}</p>
      </React.Fragment>
    )
  }
}

export default QRScan;
