import { useEffect, useState } from "react"
import { data } from "react-router"

function Github(){
    const [data, setData] = useState('')
    useEffect(() =>{
        fetch('https://api.github.com/users/Amansaxena16')
        .then(resp => resp.json())
        .then(data => setData(data))
    }, [])
    return(
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: 
                      {data.followers} </div>

            <div>
                <img className="w-60" src={data.avatar_url} alt="" />
            </div>
        </>
    )
}

export default Github