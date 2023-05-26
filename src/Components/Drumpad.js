const Drumpad = (props) => {

    const handleClick = () => {
        props.pressed(props.id,props.audio)
        new Audio(props.audio).play()
    }
    
    return (
    <>
    <button onClick={handleClick} className={props.class} id={props.id}>{props.id}</button>
    <audio src={props.audio}></audio>
    </>
    )
}

export default Drumpad