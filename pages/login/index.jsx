import Navbar from "../../components/navbar"
import Image from "next/image"
import IlustrationImage from '../../img/undraw_conversation_re_c26v1.svg'
import Link from "next/link"
import { useState } from "react"

const LoginForm = () =>{
    const initialLoginState = {
        username : '',
        password : ''
    }
    const [getLogin, setLogin] = useState(initialLoginState)
    const usernameHandle = e =>{
        setLogin(getLogin =>(
            {
                ...getLogin,
                username: e.target.value
            }
        ))
    }

    const passwordHandle = e =>{
        setLogin(getLogin =>(
            {
                ...getLogin,
                password: e.target.value
            }
        ))
    }

    const onLogin = () =>{
        console.log('on maintanance')
    }
    return (
        <div className="border-2 border-orange rounded-lg w-80 py-10 shadow flex flex-col">
            <h1 className="text-center text-orange font-medium text-3xl md:mb-10">LOGIN</h1>
            <div className="flex flex-col justify-between">
                <div></div>
                <div className="px-10">
                    <form action="" className="flex flex-col justify-between">
                            <input type="username" placeholder="username" className="px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={usernameHandle} />
                            <input type="password" placeholder="password" className="px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={passwordHandle} />
                            <button className="my-5 bg-orange text-white font-light rounded-md py-1 w-1/2 mx-14" onClick={onLogin}>login</button>
                    </form>
                    <p className="font-light text-md">
                        Doesn&apos;t have an account? <Link href={`register`}>
                            <a className="text-orange">
                                sign up
                            </a>
                        </Link>
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

const Description = () =>{
    return(
        <>
        <Image src={IlustrationImage} />
        <p className="font-light my-5 md:text-lg md:text-2xl text-center md:text-left">
            DisSpace is a disscussion space for everyone,<br /> everywhere, and about anything
        </p>
        </>
    )
}

const index = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-col md:flex-row px-10 py-10 md:px-52 md:py-32 justify-between">
                {/* description */}
                <div className="">
                    <Description/>
                </div>
                {/* loginform */}
                <div className="">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default index
