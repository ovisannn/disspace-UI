import React from 'react';
import NavbarV2 from '../../components/NavbarV2'
import Link from 'next/link';
import { useState } from 'react';
import { RegisterHandle } from '../api/RegisterHandle';
import Router from 'next/router';


const RegisterForm = () =>{
    const initialRegisState = {
        name:'',
        email:'',
        username : '',
        password : '',
        retypePass :'',
        gender:'unknown',
    }
    const [getAgreed, setAgreed] = useState(false)
    const [getRegis, setRegis] = useState(initialRegisState)
    const nameHandle = e =>{
        setRegis(getRegis =>(
            {
                ...getRegis,
                name: e.target.value
            }
        ))
    }
    const emailHandle = e =>{
        setRegis(getRegis =>(
            {
                ...getRegis,
                email: e.target.value
            }
        ))
    }
    const usernameHandle = e =>{
        setRegis(getRegis =>(
            {
                ...getRegis,
                username: e.target.value
            }
        ))
    }
    const passwordHandle = e =>{
        setRegis(getRegis =>(
            {
                ...getRegis,
                password: e.target.value
            }
        ))
    }
    const retypePassHandle = e =>{
        setRegis(getRegis =>(
            {
                ...getRegis,
                retypePass: e.target.value
            }
        ))
    }
    const genderHandle = e =>{
        setRegis(getRegis =>(
            {
                ...getRegis,
                gender: e.target.value
            }
        ))
    }
    const onSubmit = ()=>{
        var router = Router
        if (!getAgreed){
            alert('please check the agreement box')
            return
        }
        if (getRegis.retypePass != getRegis.password){
            alert('plese retype your password correctly')
            return
        }
        RegisterHandle(getRegis)
        router.push('/login')
        // console.log(getRegis)
        // console.log(getAgreed)
    }
    return (
        <div className='h-auto md:w-1/2 border-orange border-2 w-full rounded-md p-3'>
            <div className='flex flex-row justify-center'>
                <div></div>
                <div className='text-2xl text-orange font-light'>Register</div>
                <div></div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-center md:py-3 md:px-10'>Name</div>
                <div className='md:w-96'><input type="name" placeholder="name" className="w-full md:w-full px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={nameHandle} required/></div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-center md:py-3 md:px-10'>Email</div>
                <div className='md:w-96'><input type="Email" placeholder="Email" className="w-full md:w-full px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={emailHandle} required/></div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-center md:py-3 md:px-10'>Username</div>
                <div className='md:w-96'><input type="Username" placeholder="Username" className="w-full md:w-full px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={usernameHandle} required/></div>
            </div>            
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-center md:py-3 md:px-10'>Gender</div>
                <div className='md:w-96 gap-3 flex flex-col md:flex-row py-2'>
                    <div className='font-extralight'>
                        <input className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio" name="gender" value='male' onClick={genderHandle} /><label className='ml-1'>Male</label>
                    </div>
                    <div className='font-extralight'>
                        <input className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio" name="gender" value='female' onClick={genderHandle}/><label className='ml-1'>Female</label>
                    </div>
                    <div className='font-extralight'>
                        <input className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio" name="gender" value='unknown' onClick={genderHandle} /><label className='ml-1'>Choose not to tell</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-center md:py-3 md:px-10'>Password</div>
                <div className='md:w-96'><input type="Password" placeholder="Password" className="w-full md:w-full px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={passwordHandle} required/></div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col justify-center md:py-3 md:px-10'>Retype Password</div>
                <div className='md:w-96'><input type="Password" placeholder="Password" className="w-full md:w-full px-2 my-3 h-10 rounded-md shadow outline-lightOrange placeholder:font-light" onChange={retypePassHandle} required/></div>
            </div>
            <div className='flex flex-col md:flex-row justify-center text-center font-extralight'>
                <input className="form-check-input appearance-none h-4 w-4 border border-grayTxt rounded-sm bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="agreed" id="flexCheckIndeterminate" onClick={()=>{getAgreed?setAgreed(false):setAgreed(true)}}/>
                <label className="form-check-label inline-block text-gray-800 md:w-96">
                    I am agree to the terms of the Forum Subscriber Agreement and the Forum Privacy Policy.
                </label>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div></div>
                <button className="w-28 my-5 bg-orange text-white font-light rounded-md py-1 mx-24 md:mr-20" onClick={onSubmit}>Sign Up</button>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div></div>
                <div className='font-extralight w-96 flex flex-row gap-5'>I’ve already have an account 
                <div className='font-normal text-orange'>
                    <Link href='/login'><a>Sign in</a></Link>
                </div>
                </div>
            </div>
            
        </div>
    )
}

const Index = () => {
  return <div>
      <div>
            <NavbarV2 />
      </div>
      <div className='flex flex-row justify-center md:p-32 md:pt-20 pt-12 p-3'>
            <RegisterForm />
      </div>
  </div>;
};

export default Index;
