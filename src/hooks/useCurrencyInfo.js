import { useEffect, useState } from "react";

function useCurrencyInfo(base,target){
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/currency?base=${base}&target=${target}`)
        .then(response => response.json())
        .then(response => setData(response))
    }, [base,target])
    
    console.log(data)
    return data
}

export default useCurrencyInfo
