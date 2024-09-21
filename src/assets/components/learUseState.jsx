import { useState } from "react"

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

            {/* Real Time Input Field  */}
            <h1 className="font-bold text-2xl my-1">{text? text:"Enter Your Text"}</h1>
            <p className="font-bold text-2xl my-1"></p>
            <span className="font-bold text-2xl my-1"></span>
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
            <button className="bg-slate-500 px-3 py-1 m-4 rounded-sm  text-white font-bold" onClick={() => HandleVisibility()}>{isvisible}</button>
        </div>
    )
}
export default LearnUseState