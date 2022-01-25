import Image from "next/image";
import Link from "next/link";
import logoImg from "../img/disspace.png"
import { useState, useEffect, Fragment } from "react";
import { Router, useRouter } from "next/router";
import searchIcon from '../img/searchicon.png'
import NewThreadIcon from '../img/newThread.svg'
import { BellIcon, ChatAltIcon } from '@heroicons/react/outline'
// import { GetLocal } from "../pages/api/LoginHandle";
import { GetUserProfile } from "../pages/api/Helpers";
// import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";




const DisspaceLogo = () =>{
    return (
        <Link href='/'>   
            <a>
                <Image 
                src={logoImg}
                alt=""
                height={63}
                width={153}
                />
            </a>     
        </Link>
    )
}

const LoginButton = () =>{
    return (
        <div>
            <Link href='/login'>
                <a>
                    <button className="mx-2 border-2 h-10 w-24 text-orange rounded hover:text-white hover:bg-orange transition-all ease-linear">
                        Login
                    </button>
                </a>               
            </Link>
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
    const [keyword, setKeyword] = useState("")
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault();
        router.push({
          pathname: '/search',
          query: {q: keyword},
        })
    }

    return(
        <form className='flex' onSubmit={handleSearch}>
            <button className='border-y-2 border-l-2 border-orange px-2 pt-1 rounded-l h-8' type='submit'>
                <Image src={searchIcon} alt='' />
            </button>
            <input 
                type="search" 
                className='w-full h-8 border-l-0 rounded-l-none border-2 border-orange rounded focus:w-80 md:focus:w-96 transition-all ease-linear outline-none px-2 placeholder:text-orange font-extralight' 
                placeholder='Search' 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </form>
    )
}

const UserProfile = ({ user }) =>{
    // const profilePict = user.profile_pict
    return (
        <div className="flex flex-row gap-1">
            <div className="mt-2 flex flex-row gap-3">
                <Link href="/create/">
                    <a>
                        <div className='h-8 w-8 boreder-2 mt-[2px] border-orange rounded-md'>
                            <Image src={NewThreadIcon} width={28} height={28} alt='' />
                        </div>
                    </a>
                </Link>

                <Link href="/message/">
                    <a>
                        <div className="h-8 w-8 boreder-2 border-orange rounded-md">
                            <ChatAltIcon className='text-orange'/>
                        </div>
                    </a>
                </Link>

                <Link href="/notification/">
                    <a>
                        <div className="h-8 w-8 boreder-2 border-orange rounded-md">
                            <BellIcon className='text-orange'/>
                        </div>
                    </a>
                </Link>
            </div>


            {/* <Link href={`/userProfile/${user.username}`}>
                <a> */}
                <Menu>
                    <Menu.Button className="flex flex-row h-12 w-auto max-w-[144px] border-2 border-orange rounded-md text-center font-normal p-1">
                        <div className="rounded-full h-8 w-8" style={{overflow:'hidden'}}>                            
                            <img
                            alt=""
                            src={user?.profile_pict}
                            layout='fixed' width={32} height={32}
                            />
                        </div>
                        <div className="ml-3 mt-1">
                            {user.username}
                        </div>
                    </Menu.Button>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                            <button className={`${active ? 'bg-green text-white' : 'text-green'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                profile
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button className={`${active ? 'bg-darkRed text-white' : 'text-darkRed'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                logout
                            </button>
                            )}
                        </Menu.Item>
                        </div>
                    </Menu.Items>
                    </Transition>
                </Menu>
                {/* </a>
            </Link> */}
        </div>
    )
}

const NavbarV2 = () => {
    const [getLogin, setLogin] = useState(false)
    const [getUser, setUser] = useState({})
    useEffect(() => {
        // const router = useRouter()
        const item = localStorage.getItem('userAuth')
        var auth = JSON.parse(item)
        if (item == (null || undefined)){
            setLogin(false)
        }else{
            setLogin(true)
            fetch(GetUserProfile(auth.username))
            .then(response => response.json())
            .then(user => setUser(user.data));
        }
      }, [])
      

  return(
 <div className="h-auto min-h-fit bg-white w-full shadow-md flex flex-col md:flex-row md:px-16 md:justify-between">
      <div className="flex flex-row justify-center md:mt-1">
            <DisspaceLogo />
      </div>
      <div className="flex flex-row justify-center py-2 md:pt-6">
          <SearchBar />
      </div>
      <div className="mx-2 flex flex-row justify-center py-2 md:py-4">
          {getLogin? <UserProfile user={getUser} /> : <><LoginButton /><RegisterButton /></>}
      </div>
  </div>
)
}

export default NavbarV2;
