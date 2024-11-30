import { useState } from "react"
import Button from "./button/Button"

function PasswordGenerator(){
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState('dDUlj8Vc')
    
    let pass = ""
    function passGenerator(e){

        e.preventDefault(); 
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(numberAllowed){
            str = str + "1234567890"
        }
        if(characterAllowed){
            str = str + "!@#$%&*?/"
        }
        
        for(let i = 1; i <= length; i++){
            let num = Math.floor(Math.random() * str.length + 1)
            pass = pass + str.charAt(num)
        }
        setPassword(pass)
    }

    function copyPassword(e){
        e.preventDefault()
        window.navigator.clipboard.writeText(password)
    }
    return(
        <div className="bg-slate-500 py-4">
            <div>
                <h1 className="text-center text-2xl text-green-300 font-bold mb-4">Password Generator</h1>
                <form action="" className="text-center">

                    {/* input box to display the password */}
                    <input type="text" value={password} readOnly className="w-[28rem] h-[4rem] rounded-2xl pl-[6px] font-bold text-2xl"/>
                    <Button value="Copy" bg="red" onClick={copyPassword}/> 
                </form>
            </div>

            {/* Generat Password Button */}
            <div className="text-center">
                <Button value="Generate Password" bg="grey" onClick={passGenerator}/>
            </div>

           <div className="flex justify-center py-4">
            <form action="#" className="flex  gap-4">

                {/* for length */}
                <input type="range" min={8} max={100} value={length} 
                onChange={(e) => setLength(e.target.value)}/>
                <h1>Length: {length}</h1>

                {/* for number */}
                <input type="checkbox" defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}/>
                <label>Numbers</label>

                {/* for character */}
                <input type="checkbox" defaultChecked={characterAllowed} 
                onChange={() => setCharacterAllowed((prev) => !prev)} />
                <label>Characters</label>

            </form>
           </div>
        </div>
    )
}

export default PasswordGenerator