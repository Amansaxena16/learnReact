function Button(props){
    return(
        <button onClick={props.onClick} className="px-3 py-1 m-4 rounded-sm 
        text-white font-bold" style={{backgroundColor: props.bg}}>{props.value || "Click Me"} </button>
    )
}

export default Button