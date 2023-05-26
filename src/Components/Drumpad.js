import { forwardRef } from "react"


const padStyle = {
    justifyContent: "center",
    alignItems: "center",
    padding: "3vw",
    width: "10vw",
    height: "10vw",
    fontSize: "5vw",
    margin: "1vw",
    border: "0.5vw solid #AF3E4D",
    backgroundColor: "#424242",
    color: "white"
}

const Drumpad = forwardRef((props, ref) => {

    const handleClick = () => {
        const audio = new Audio(props.audio)
        audio.play()
        props.pressed(props.name)
        
    }
    
    return (
    <>
    <button ref={ref} onClick={handleClick} className={props.class} id={props.id} style={padStyle}>{props.id}</button>
    <audio src={props.audio} className="clip" id={props.id}></audio>
    </>
    )
})

export default Drumpad