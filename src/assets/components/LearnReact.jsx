import { useState } from "react"
import Card from "./card/Card"
import Button from "./button/Button"

function LearnReact(){
    const username = "saxenaJii"  // variable declared

    const [Counter, setCounter] = useState(5)
    const [color, setColor] = useState('white')

    function addValue(){
        setCounter(Counter + 1)
    }

    function removeValue(){
        setCounter(Counter - 1)
    }

    return(
        <div className="w-full h-full" style={{background: color}}>

            {/* this is how we use the variable in react --> { } */}
            this is running by {username}!! <br /> <br />


            <div className="flex justify-center m-4">
                <h1>Counter Value : {Counter}</h1> 
                <br />
                <Button onClick={addValue} value = "Add Value" bg="red"/>
                <Button onClick={removeValue} value = "Remove Value" bg="blue"/>
            </div>
            <div className="flex items-center justify-evenly">
                <Card title = "WHAT THE FUCK" sno = "#001" price= "100"/>
                <Card title = "WHAT THE SUCK" sno = "#002" price= "500"/>
                <Card title = "WHAT THE BHAAK" sno = "#003" price= "1000"/>
            </div>

            <div className="flex items-center justify-evenly">
                <Button onClick={() => setColor("black")} value="Black" bg="blue"/>
                <Button onClick={() => setColor("blue")} value="Blue" bg="blue"/>
                <Button onClick={() => setColor("red")} value="red" bg="blue"/>
                <Button onClick={() => setColor("pink")} value="pink" bg="blue"/>
                <Button onClick={() => setColor("skyblue")} value="sky Blue" bg="blue"/>
                <Button onClick={() => setColor("olive")} value="olive" bg="blue"/>

            </div>


        </div>
    )
}

export default LearnReact