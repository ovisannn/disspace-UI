import Link from 'next/link'
import Image from 'next/image'
import logo_img from '../img/disspace.png'
import searchIcon from '../img/searchicon.png'
import { BellIcon, ChatAltIcon } from '@heroicons/react/outline'
import NewThreadIcon from '../img/newThread.svg'
import dummyAvatar from '../img/dummy avatar.jpg'


const dummyUser = {
    id : 18293710,
    full_name : 'mingun',
    username : 'jhonwkwkk',
    avatar : dummyAvatar,
  }

const LoginButton = () =>{
    return (
        <div>
            <button className="mx-2 border-2 h-10 w-24 text-orange rounded hover:text-white hover:bg-orange transition-all ease-linear">
                Login
            </button>
        </div>
    )
}

const RegisterButton = () =>{
    return (
        <div>
            <button className="mx-2 h-10 w-24 text-white bg-orange rounded transition-all ease-linear hover:text-orange hover:border-2 hover:bg-white">
                Register
            </button>
        </div>
    )
}

const SearchBar = () => {
    return(
        <div className='flex'>
            <button className='border-y-2 border-l-2 border-orange px-2 pt-1 rounded-l'>
                <Image src={searchIcon} alt='' />
            </button>
            <input type="search" className='w-96 h-8 border-l-0 rounded-l-none border-2 border-orange rounded focus:w-[771px] transition-all ease-linear outline-none px-2 placeholder:text-orange font-extralight' placeholder='Search' />
        </div>
    )
}

const NotUserUI = () => {
    return(
        <>
            <LoginButton />
            <RegisterButton />
        </>
    )
} 


const UserUI = ( { userProps } ) =>{
    const avatar_style = {
        overflow : 'hidden'
    }

    return(
        <>
            <div className="flex h-12 w-32 justify-between content-center mx-5 py-2">
                <button className='h-8 w-8 boreder-2 mt-[2px]'>
                    <Image src={NewThreadIcon} width={28} height={28} alt='' />
                </button>
                <button className="h-8 w-8 boreder-2">
                    <ChatAltIcon className='text-orange'/>
                </button>
                <button className="h-8 w-8 boreder-2">
                    <BellIcon className='text-orange' />
                </button>
            </div>

            <button className='grid grid-flow-col justify-between content-center h-12 w-36 border-2 border-orange rounded-lg px-2 hover:text-white hover:bg-orange hover:rounded-none transition-all ease-linear'>
                <div className="h-8 w-8 rounded-full" style={avatar_style}>
                    <Image src={userProps.avatar} layout='fixed' width={32} height={32} alt='' />
                </div>
                <div className="my-1 font-extralight">
                    {userProps.full_name}
                </div>
            </button>
        </>
    )
}

const Navbar = () => {
    let isLoggedIn = true
    return (
        <div className=" flex flex-row justify-between w-full md:h-16 bg-white shadow-md px-16">
            {/* logo */}
            <div>
                <Link href='/'>
                    <a>
                        <Image src={logo_img} height={63} width={153} alt=''/>
                    </a>
                </Link>
            </div>
            {/* search bar component */}
            <div className='grid content-center w-6/12 flex justify-center'>
                <SearchBar />
            </div>
            {/* button component */}
            <div className='grid content-center'>
                <div className='flex'>
                    {
                        isLoggedIn
                        ?<UserUI userProps={ dummyUser } />
                        :<NotUserUI />
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
