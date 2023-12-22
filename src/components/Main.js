import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Names } from './Redux/Slice';

function Main() {
  let [name1,setname1]=useState("");
  let [name2,setname2]=useState("");
  let [allow,setAllow] = useState(true);
  let [click,setClick] =useState(false);
  let [access,setAccess]=useState(true)
  let ref =useRef()
  let dispatch = useDispatch()
  
  const getInitialState = () => {
    const value = "x";
    return value;
  };
  const getInitialState2 = () => {
    const value = "o";
    return value;
  };
  const [value1, setValue1] = useState(getInitialState);
  const [value2, setValue2] = useState(getInitialState2);

  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
// console.log(ref.current.value)
  useEffect(()=>{
    
    localStorage.setItem("name2",name2)
    localStorage.setItem("name2Value",value2)
    localStorage.setItem("name1",name1)
    localStorage.setItem("name1Value",value1)
    if(name1=="" || name2=="" ){
      setAllow(true)
      if(click==true){
        setAccess(false)
      }
      }
      else if(name1 !="" && name2 !=""){
        setAllow(false)
        if(click==true){
          setAccess(true)
        }
        // setAccess(true)
      }
    },[name1,name2,click,value1,value2])
    // console.log(ref.current.value)
  return (
    <div className='Main'>
<div className='center'>
    <div className='logo'>
<img src="./x-o.jpg"/>
    </div>
<div className='bar'>
<label className='title' for="firstPlayer">First Player Name:</label>
<div className='selector'>
<input type='text' id={"firstPlayer"} onChange={(e)=>{setname1(e.target.value)}}/>
<select className='selecter' onChange={handleChange1} value={value1} >
  <option value={"x"}>X</option>
  <option value={"o"}>O</option>
</select>
</div>
<div className='bar' >
<label className='title' for="firstPlayer">Second Player Name:</label>
<div className='selector'>
<input type='text' placeholder='Eyad' id={"secondPlayer"} onChange={(e)=>{setname2(e.target.value)}}/>
<select className='selecter' onChange={handleChange2} value={value2} >
  <option  value={"o"}>O</option>
  <option  value={"x"}>X</option>
</select>
</div>
</div>
<Link to={allow?"/Main":"/second"} className='start' onClick={()=>{
  let namelocal1=localStorage.getItem("name1")
  let namelocal2= localStorage.getItem("name2")
  dispatch(Names({namelocal1,namelocal2
  }))
setClick(true)
}}>start</Link>
<div className={access?'hidden':"error_Message"}>please insert the players names
الرجاء ادخال اسماء اللاعبين
</div>
</div>
<div className='footer_main'>
Made by Eyad Al Moubaed @ 2023
</div>
</div>
    </div>
  )
}
export default Main