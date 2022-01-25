const UserButton = ({user, rangking}) =>{
    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-white my-1 h-auto w-full shadow rounded-md px-5 py-2">
            <div>
                {rangking}
            </div>
            <div>
                {user.username}
            </div>
            <div>
                <button className="bg-orange text-white rounded px-2 font-light">
                    follow
                </button>
            </div>
        </div>
    )
}

const LeaderBoards = ({ topUsers }) => {
    return (
        <div className="w-80 h-auto grid grid-flow-row border-2 border-lightGray shadow-sm rounded">
        <div className="h-20 w-full relative rounded-t text-white font-light text-2xl text-center align-middle py-5 bg-orange">
            LEADERBOARD
        </div>
        <div className="w-full px-5 font-light bg-lightGray">
            {
                topUsers?.map((user, index) => (
                    <UserButton key={user._id} user={user} rangking={index+1} />
                ))
            }
        </div>
    </div>
    )
}

export default LeaderBoards
