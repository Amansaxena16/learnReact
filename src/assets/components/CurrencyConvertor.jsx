import { useState } from "react"
import useCurrencyInfo from "../../hooks/useCurrencyInfo"
import InputBox from "./inputBox/InputBox"
import Button from "./button/Button"

function CurrencyConvertor(){

    const [to, setTo] = useState('usd')
    const [from, setFrom] = useState('inr')

    // const currencyInfo = useCurrencyInfo(to, from)
    // const options = Object.keys(currencyInfo)

    return(
        // <div className="bg-black py-8">
        //    <InputBox className={"w-2/5"} label={to}/>
        //    <InputBox className={"w-2/5"} label={from}/>
        // </div>
        <div>
            i can do this and i will do it!!
        </div>
    )
}

export default CurrencyConvertor