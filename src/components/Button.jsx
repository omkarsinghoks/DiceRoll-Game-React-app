import React from 'react'

const Button = (props) => {
  return (
    <div  >
       <button  {...props} className='btn'  style={{ width: props.width ,height:props.height ,backgroundColor:props.color,
       color:props.clr}}> {props.text} </button>
    </div>
  )
}

export default Button