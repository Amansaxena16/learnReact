import { useState } from "react";
import { useRef } from "react";

function LearnUseState(){

    const [count, setCount] = useState(0)
    const [light, controlLight] = useState("OFF")
    const [bgcolor, setBgColor] = useState('grey')
    const [text, setText] = useState("")
    const [isvisible, setVisible] = useState("Hide")
    const [Display, setDisplay] = useState('')

    function changeLight(){
        
        if(light === "OFF"){
            controlLight("ON")
            setBgColor('yellow')
        }
        else{
            controlLight("OFF")
            setBgColor('grey')
        }

    }

    function handleChange(e){
        setText(e.target.value)
    }

    function HandleVisibility(){

        if(isvisible === "Hide"){
            setVisible("Show")
            setDisplay("none")

        }
        else{
            setVisible("Hide")
            setDisplay("block")
        }
    }

    const inputRef = useRef(null)
    function HandleButtonClick(){
        inputRef.current.click()
    }
    return(
        <div className="flex flex-col items-center p-6">
            {/* Counter Program  */}
            <h1 className="font-bold text-2xl">Clicked {count} times</h1>
            <button className="bg-blue-300 p-3" onClick={() => {setCount(count+1)}}>click me!!</button>

            <br />
            <br />

            {/* Toggle button  */}
            <div  id="bulb" className="w-16 h-16 rounded-full" style={{backgroundColor: bgcolor}}></div>
            <div>
                <button onClick={changeLight} className="bg-slate-500 px-3 py-1 m-4 rounded-sm  text-white font-bold">{light}</button>
            </div>

            <br />
            <br />

            {/* Real Time Input Field changer */}
            <h1 className="font-bold text-2xl my-1">{text? text:"Enter Your Text"}</h1>
            <input 
                className="border-2 border-sky-500 w-48"
                type="text"
                placeholder="Enter your text...." 
                value={text}
                onChange={handleChange}/>


            <br />
            <br />

            {/* Show and Hide Elements */}
            <h1 className="text-purple-400 font-bold text-2xl" style={{display: Display}}>You Are Cute :)</h1>
            <button className="bg-slate-500 px-3 py-1 m-4 rounded-sm  text-white font-bold" 
            onClick={HandleVisibility}>{isvisible}</button>

            <br />
            <br />

            {/* change button */}
            <button onClick={HandleButtonClick} className="bg-[rgb(93,93,255)] text-white font-semibold py-1 px-2 rounded-md shadow hover:bg-[rgb(66,66,201)] my-2">Change Image</button>
            <input type="file" className="hidden" ref={inputRef}/>

            <br />
            <br />

            <h1 className="text-blue-500">The last is form Fedora Linux!!</h1>
            
        </div>
    )
}
export default LearnUseState