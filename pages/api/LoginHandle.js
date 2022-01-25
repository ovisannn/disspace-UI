import axios from 'axios'
import { useRouter } from 'next/router'
import { LoginAPI } from './Helpers'


const StoreIntoCache = async (response) =>{
  localStorage.setItem("userAuth", JSON.stringify(response.data))
}

export const GetLocal = () =>{
  return localStorage.getItem("userAuth")
}

const clearCache = () =>{
  localStorage.clear("userAuth")
}
export const LoginHandle = (usernameInput, passwordInput) =>{
    clearCache()
    axios({
        method: 'post',
        url: LoginAPI(),
        data: {
          username: usernameInput,
          password: passwordInput
        }
      }).then(function (response) {
        StoreIntoCache(response.data)
      })
      .catch(function (error) {
        alert("invalid credentials")
        console.log(error)
      })
}