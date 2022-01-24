import axios from 'axios'
// import fs from 'fs'
// import path from 'path'
import { GetStaticProps } from 'next'

// const USER_LOGIN_CACHE_PATH = path.resolve('.userAuth')

// const StoreIntoCache : GetStaticProps = async (response) =>{
//   const data = response.data
//     try {
//       fs.writeFileSync(
//         path.join(__dirname, USER_LOGIN_CACHE_PATH),
//         JSON.stringify(data),
//         'utf8'
//       )
//       console.log('Wrote to user cache')
//     } catch (error) {
//       console.log('ERROR WRITING USER CACHE TO FILE')
//       console.log(error)
//     }
// }

const StoreIntoCache = (response) =>{
  localStorage.setItem("userAuth", JSON.stringify(response.data))
  console.log(JSON.parse(localStorage.getItem("userAuth")))

}

export const getUserAuth = () =>{
  cachedData = JSON.parse(
    fs.readFileSync(path.join(__dirname, USER_LOGIN_CACHE_PATH), 'utf8')
  )
}

export const LoginHandle = (usernameInput, passwordInput) =>{
    // console.log(usernameInput, passwordInput)
    axios({
        method: 'post',
        url: 'http://localhost:8080/v1/user/login',
        data: {
          username: usernameInput,
          password: passwordInput
        }
      }).then(function (response) {
        // handle success
        StoreIntoCache(response.data)
      })
      .catch(function (error) {
        console.log(error.response.data)
        // handle error
        return error
      })
}