import './Button.css'

const ButtonCreate =(props)=>{
    return(
        <button className='button'>
            {props.children}
        </button>
    )
}

export default ButtonCreate