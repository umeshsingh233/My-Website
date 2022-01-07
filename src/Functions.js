import axios from "axios";


export function callApi(url, self){
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        self.setState({
          userData : response.data.user,
          totalItems: response.data.user.length,
        });
      })
      .catch((error) => {
        console.log(error);
        self.setState({ errorMsg: "Error Retreiving Data" });
      });
  };

