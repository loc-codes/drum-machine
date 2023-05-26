const displayStyle = {
    fontSize: "4vw",
    textAlign: "center",
    border: "1vw solid #AF3E4D",
    color: "white",
    padding: "0"
}

const Display = (props) => {
    return <div id={props.id} style={displayStyle}><p>{props.text}</p></div>
}

export default Display