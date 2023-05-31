import { forwardRef } from "react"

const Drumpad = forwardRef((props, ref) => {

    const handleClick = () => {
        const audio = new Audio(props.audio)
        audio.play()
        props.pressed(props.name)
        props.setActiveKey(props.id); 
        setTimeout(() => {
            props.setActiveKey(null)
        }, 200);
    }
    
    return (
    <>
    <button style={{
        backgroundColor: props.active ? "rgb(200, 230, 160)" : "rgb(55,55,60)",
        boxShadow: props.active ? "none": "3px -8px 1px black"
        }} 
        ref={ref} onClick={handleClick} className={props.class} id={props.id}>
            {props.id}
        </button>
    <audio src={props.audio} className="clip" id={props.id}></audio>
    </>
    )
})

export default Drumpad