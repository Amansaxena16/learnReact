import { useContext } from "react"
import UserContext from "../../../context/UserContext"

function Profile(){
    const {user} = useContext(UserContext)
        if(!user) return <div className="text-center">Please Login In!!</div>
        return(
            <div>
                <h1 className="text-red-600 p-4 text-center">Welcome {user.username} </h1>
            </div>
    )
}

export default Profile