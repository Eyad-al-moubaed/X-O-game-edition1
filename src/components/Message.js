import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Message() {
    let [show,setShow] =useState(true)
    let {message,ActiveArr}  = useSelector(state => state.container)
 setTimeout(()=>{
setShow(false)
 },5000)
    return (
        <div className={show?'Message':"hidden"}>
{message}
    </div>
  )
}
export default Message