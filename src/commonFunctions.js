import axios from "axios";

export const checkLoginToken = () => {
    let is_logged = false;
    let token = localStorage.getItem("JWT_TOKEN");
    if(token){
        //
        is_logged = true;

    }
    return is_logged;
 };

 export const getAuthHeader = () => {
    let rtn = {}
    let is_logged = false;
    let token = localStorage.getItem("JWT_TOKEN");
    if(token){
        //
        is_logged = true;
        rtn.header_name = "Authorization",
        rtn.header_val = "Bearer "+token;
        rtn.is_logged = true;
    }else{
        rtn.is_logged = false
    }
    
    return rtn;
 };


export function callApi(url, self,){

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

