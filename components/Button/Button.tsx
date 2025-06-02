import React from 'react'

interface Button {
    text:string,
    onPress:()=>void
}

function Button({text, onPress}:Button) {
  return (
    <div  onClick={onPress} className={classNames.btn}>
        <p>{text}</p>
    </div>
  )
}

const classNames ={
    btn:`shadow-lg bg-[#F18125]`
}

export default Button