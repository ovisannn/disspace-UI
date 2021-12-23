import { MailIcon } from '@heroicons/react/outline'

const ModeratorTag = ({ moderator }) =>{
    return(
        <>
        {moderator.user_id}
        </>
    )
}

const MessageModeratorButton = ({ categoryColor }) =>{
    return (
        <button className="flex flex-row justify-between font-light text-center w-11/12 text-white h-8 rounded-md hover:rounded-none transition-all ease-linear" style={{backgroundColor: categoryColor}}>
            <div></div>
            <div className="flex flex-row">
                <MailIcon className='h-7 w-7 text-white font-light' /> 
                <div className='py-1'>
                    Message moderator
                </div>
            </div>
            <div></div>
        </button>
    )
}

const ModeratorList = ({ category, moderatorList }) => {
    return (
        <div>
                <div className="w-80 h-auto grid grid-flow-row border-2 border-lightGray shadow-sm rounded">
        <div className="h-20 w-full relative rounded-t text-white font-light text-2xl text-center align-middle py-5" style={{backgroundColor: category.color_theme}}>
            Moderator
        </div>
        <div className="w-full px-5 font-light py-5">
            <div className="flex w-full justify-center">
                <MessageModeratorButton categoryColor={category.color_theme} />
            </div>

            <div className="my-5">
                {
                    moderatorList.map((person)=>(
                        <div  key={person.id}>
                            <ModeratorTag moderator = {person}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
        </div>
    )
}

export default ModeratorList
