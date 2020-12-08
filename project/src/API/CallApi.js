import axios from "axios";
import * as BaseUrl from "../Constants/BaseUrl"

function CallApi(endpoint, body, method ="GET") {
    return axios({
            method: method,
            url: `${BaseUrl.ApiUrl}/${endpoint}`,
            data: body
          }).catch(err => {
              console.log(err);
          })
    
}

export default CallApi;