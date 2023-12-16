import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'

function SecondPage() {
  let {Finalresults} = useSelector(state =>state.container)
  console.log(Finalresults)
  return (
    <>
<Header/>
<Footer/>
</>

  )
}

export default SecondPage