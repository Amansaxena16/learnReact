import { useState } from "react"

function PasswordGenerator(){
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState('')

    return(
        <div className="bg-slate-500">
           <div>
            <h1>Length({length})</h1>
            <form action="#">
                <input type="checkbox" />
                <label htmlFor="numbers">Numbers</label>

                <input type="checkbox" />
                <label htmlFor="characters">Characters</label>
            </form>
           </div>
        </div>
    )
}

export default PasswordGenerator