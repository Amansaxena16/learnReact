import { useContext, useState } from "react"
import UserContext from "../../../context/UserContext"

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        console.log('clicking')
        setUser({username, password})
    }

    return(
        <>

            <div className="bg-blue-300 text-center">
                <div className="py-2">
                    <span>Username : </span>
                    <input type="text" placeholder="Enter Your UserName" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

              <div className="py-2">
                <span>Password : </span>
                <input type="text" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
                

                <button onClick={handleSubmit} className="px-3 py-1 m-4 rounded-sm 
        text-white font-bold bg-purple-500">Submit</button>
            </div>
        </>
    )
}

export default Login