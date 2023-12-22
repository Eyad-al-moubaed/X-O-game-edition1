import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
// import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
// import CloseIcon from '@mui/icons-material/Close';
import { useDispatch ,useSelector} from 'react-redux';
// import { addId } from './Redux/Slice';
import  Box  from './Box';
import { FinalResult, sums } from './Redux/Slice';
function Body(props) {
  // let dispatch = useDispatch()
  // let [allow,setAllow]=useState(false)
  let {ActivArr}=useSelector(state =>state.container)
  console.log(ActivArr);
    // let [ID,setId] =useState()
    let {sum1,sum0,result}=useSelector(state =>state.container)
let dispatch = useDispatch()
    
//     let check = (e)=>{
// let itemId=e.target.id;
// setId(itemId)
// if(ActivArr.length<9){
//     dispatch(addId(itemId))
// }
// }
// function f(){
//     for(let i=0;i<arr.length;i++){
//          for(let j=0;j<WinArr.length;j++){
//               if(arr[i]== WinArr[j][0] && arr[i+1]== WinArr[j][1] && arr[i+2]== WinArr[j][2]  ){
// console.log("wins")
// // console.log(arr[i].id)
// // console.log(WinArr[j][0])

//          }

//     }
//     }
                // if(item[i]==arr[i].id && item[i+1]==arr[i+1].id && item[i+2]==arr[i+2].id) {
                //     console.log("wins")
                // }

// console.log(arr[i].id)
// console.log(item)
// }
return (
  <>
    <div className='Body'>
    {/* {console.log(ActivArr)} */}
    <Box  id="1"  x="1" y="1" val={props.val} />
    <Box  id="2"  x="1" y="2" val={props.val} />
    <Box  id="3"  x="1" y="3" val={props.val} />
    <Box  id="4"  x="2" y="1" val={props.val} />
    <Box  id="5"  x="2" y="2" val={props.val} />
    <Box  id="6"  x="2" y="3" val={props.val} />
    <Box  id="7"  x="3" y="1" val={props.val} />
    <Box  id="8"  x="3" y="2" val={props.val} />
    <Box  id="9"  x="3" y="3" val={props.val} />
    </div>
<div className='ScoreBar'>
<div className='sumBox'>{`${localStorage.getItem("name1Value")=="o"?localStorage.getItem("name1"):localStorage.getItem("name2")} score : `}{sum1?sum1:0}</div>
<div className='sumBox'>{`${localStorage.getItem("name2Value")=="x"?localStorage.getItem("name2"):localStorage.getItem("name1")} score : `}{sum0?sum0:0}</div>
<div className='sumBox' onClick={()=>{
dispatch(sums())
localStorage.setItem("score player x",0)
localStorage.setItem("score player o",0)
localStorage.setItem("name1Value",0)
localStorage.setItem("name2Value",0)

}}>reset</div>
<div className='sumBox'onClick={
  ()=>{
window.location.reload()  
  }
}>
Play Again
</div>
</div>
</>
  )
}

export default Body