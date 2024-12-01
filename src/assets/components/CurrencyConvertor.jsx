import { useState } from "react"
import useCurrencyInfo from "../../hooks/useCurrencyInfo"
import InputBox from "./inputBox/InputBox"
import Button from "./button/Button"

function CurrencyConvertor(){

    // useCurrencyInfo(base, target)
    return(
        <div className="bg-black py-8">
           <InputBox className={"w-2/5"} label={"From"}/>
           <InputBox className={"w-2/5"} label={"TO"}/>
        </div>
    )
}

export default CurrencyConvertor