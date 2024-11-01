import React from 'react'

const Button = ({onClickHandler , value, style}) => {
  return (
    <div>
        <button onClick={onClickHandler}
        className=' ml-4 w-[50px]  p-1'
        style={style}>{value}</button>
    </div>
  )
}

export default Button