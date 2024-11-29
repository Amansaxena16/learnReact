function Button(props){
    return(
        <button onClick={props.onClick} className={`bg-${props.bg}-500 px-3 py-1 m-4 rounded-sm 
        text-white font-bold`}>{props.value}</button>
    )
}

export default Button