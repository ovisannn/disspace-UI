import Image from 'next/image'
import logo_img from '../img/disspace.png'
import searchIcon from '../img/searchicon.png'

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
                <Image src={searchIcon} />
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

const UserUI = () =>{
    return(
        <>
            tes
        </>
    )
}

const Navbar = () => {
    let isLoggedIn = false
    return (
        <div className=" flex flex-row justify-between w-full md:h-16 shadow-md bg-white shadow-md px-16">
            {/* logo */}
            <div>
                <Image src={logo_img} height={63} width={153} />
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
                        ?<UserUI />
                        :<NotUserUI />
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
