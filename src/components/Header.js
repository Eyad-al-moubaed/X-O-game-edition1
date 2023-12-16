import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Body from './Body';
import { useDispatch ,useSelector} from 'react-redux';
import { addId, Random, Win ,NewRandom ,Count} from './Redux/Slice';

import "../App.css"
import Main from './Main';
function Header() {
  let [count,setCount] = useState()
  let [button,setButton] =useState(false)
let dispatch = useDispatch()
let {Countt} = useSelector(state => state.container)
let {ActivArr}=useSelector(state =>state.container);
let {newrandom}=useSelector(state =>state.container);
let {RandomArray}=useSelector(state =>state.container);
let {DoubleArr,result}=useSelector(state =>state.container);
let  ref1 =useRef()
let  ref2 =useRef()
// console.log("hello this is the begin------------")
// console.log("active",ActivArr)
// console.log("random",RandomArray)
// console.log("newrandom",newrandom)
// console.log("doubleArray",DoubleArr)
// console.log("-----------")


// console.log(result);



//  console.log(Countt)
useEffect(()=>{
  if(Countt==1 || Countt==true){
    ref1.current.classList.add("X-O-switch")
    if(ref2.current.classList.contains("X-O-switch")){
      ref2.current.classList.remove("X-O-switch")
      console.log(ref1.current.classList)
    }
  }
  if(Countt==0 || Countt==false){
    ref2.current.classList.add("X-O-switch")
    if(ref1.current.classList.contains("X-O-switch")){
    ref1.current.classList.remove("X-O-switch")
  }
}
},[Countt])

  return (
    <>
{/* <Main/> */}
    <div className='header'>
    <div className='scoreBar'>
    
    <div ref={ref1}  className="X" onClick={(e)=>{
      setButton(!button)
      // setCount(1)
      dispatch(Count(1))
    }}>
    <PanoramaFishEyeIcon  className="X-color"/>
</div>
<div ref={ref2} className="O" onClick={(e)=>{
  setButton(!button)
  // setCount(0)
  dispatch(Count(0))
}}>
    <CloseIcon className="O-color"/>
    </div>
    </div>
    </div>
<Body val={Countt}/>
    </>
  )
}
export default Header