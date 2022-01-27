import axios from "axios"
import { RegisterAPI } from "./Helpers"
import { Router } from "next/router"

export const RegisterHandle = (regisData) =>{
    axios({
        method: 'post',
        url: RegisterAPI(),
        data: {
            full_name:regisData.name,
            email:regisData.email,
            username : regisData.username,
            password : regisData.password,
            gender:regisData.gender,
        }
      }).then(function (response) {
        // console.log(response)
      })
      .catch(function (error) {
        if (error.response) {
            // Request made and server responded
            alert('error : '+error.response.status+' : '+error.response.data.meta.message);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
      })
}