import React, { useMemo } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { useState} from 'react';
import { addId, Random, Win ,NewRandom, cpu ,Filter, Message, Count} from './Redux/Slice';
import { CoPresentOutlined } from '@mui/icons-material';
import AudioPlayer from 'react-audio-player';
function Box({
    val,
    id,
    x,
    y
}) {
    let dispatch = useDispatch()
    let {newrandom} = useSelector(state => state.container);
    let {RandomArray} = useSelector(state => state.container);
    let {DoubleArr} = useSelector(state => state.container);
    let {FinalRandom} = useSelector(state => state.container);
// function test 
// let a=[{a:1,b:2,c:3},{a:1,b:2,c:3}]
// let a =[1,2,3];s
// let b=[1,2,3];

///////////// create function to generate random array 

// let a =[{x:'2',y:'1',id:5},{x:'1',y:'3',id:6}];

// let axisArr = [{x:'2',y:'1',id:5},{x:'2',y:'2',id:4},{x:'1',y:'2',id:3},{x:'1',y:'3',id:7},{x:'1',y:'3',id:9}];
// //objects 

// let ran = Math.floor(Math.random() * 5 );
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<axisArr.length;j++){
//     if(a[i].id==axisArr[j].id){
// a.push(axisArr[ran])
//     }
//     else{
//         while(a[i].id!==axisArr[j].id){
//             ran = Math.floor(Math.random() * 3 );        
//                    }
//                    a.push(axisArr[ran])
//     }

// }
// }
// console.log(a)

// // console.log(a.includes(axisArr[ran].id))
//     if(!a.includes(axisArr[ran].id)){
//         a.push(axisArr[ran])
//         }
//         else{
//             while(a.includes(axisArr[ran].id)){
//      ran = Math.floor(Math.random() * 3 );        
//             }
//         ja.push(axisArr[ran])
//         }
// console.log(a)


//////


// let active =  [{a:2,b:5,c:3},{a:1,b:2,c:3},{a:4,b:8,c:9}];

// let abc =[];

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<active.length;j++){
//         if(a[i].a!==active[j].a){
// if(!abc.includes(active[j])){
// abc.push(active[j]);

// }
//         }
//     }
// }

// a.map((ele)=>{
//  abc.push(active.filter((ele2)=>{
   
//     console.log(ele.a,ele2.a);
//         return (ele.a!=ele2.a);
//     }))
// })
// console.log("hello this is abc")
// console.log(abc)


//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<active.length;j++){
//             if((a[i].a!==active[j].a)){
//     if(!(abc.includes(active[j]))){
//     console.log('mission')
//         abc.push(active[j]);
//     }
//     }
//     }
// }
// console.log("this is abc",abc)


// console.log(DoubleArr)
// console.log(RandomArray);
    let [allow,setAllow]=useState(false)
    let [F,setF]=useState(null)

    let {ActivArr}=useSelector(state =>state.container);
    let {Countt}=useSelector(state =>state.container);
    let {empty}=useSelector(state =>state.container);
    let {ID}=useSelector(state =>state.container);
// console.log('---------active')
    // console.log(ActivArr)
    // console.log("newrand")
    // console.log(newrandom)
    let [Id,setId] =useState() //ID
    let [player,setplayer]= useState();
    let [allow1,setAllow1]=useState(false)
    let check = (e)=>{
setAllow1(true)
        let itemId=e.target.id;
        
        setId(itemId)
        if(ActivArr.length<9){
            dispatch(addId({id:parseInt(itemId),status:val,axis:{x:x,y:y}}))
            setAllow(true)
            if(player!==val){
             
               setplayer(val)
            console.log("hello from the other side")
            }
            else{
                console.log("hello form the message")
                dispatch(Message("its not your turn"))
                // setplayer(false)
            }
                dispatch(Win())
                // dispatch(cpu({x:x,y:y,id:id}))//newwwwwwwwwwwwwww


                // random mode (easy mode)/////
                //    dispatch(Random())
            // setTimeout(()=>{
                // dispatch(NewRandom())//newwwwwwwwwwwwwwwwwwwwwwwww
                // dispatch(Filter())

            // },200)
dispatch(Count(!val))
        }
        }

let fun = useMemo(
 ()=>{   for(let i=0;i<FinalRandom.length;i++){
    if(FinalRandom[i].x ==x && FinalRandom[i].y ==y ){
return true;
    }
}},[FinalRandom]);
// console.log(Countt);
// // console.log(fun)
// console.log("this is active array",ActivArr)
// console.log("-----------------")
// console.log("this is newrandom",newrandom)

////////////////////////////newwwwwwwwwwwwwwwwwwwww
// console.log("this is empty array",empty)

// console.log("this is double array",DoubleArr)
// console.log("this is ID array",ID)
// console.log("this is final ",FinalRandom)
  return (
      <div className='box' id={id}  onClick={check}>
       {allow1 &&
       <audio controls   autoPlay    className='hidden' src='music/pop_sound_effect_cute_BRp9rSeXc68_140 (mp3cut.net) (3).mp3'/>
       }    
    {
    ( (allow && player==1) || (fun===true && Countt==0 ))&&
        <PanoramaFishEyeIcon className="X-color"/> 
    }
    { 
       ((allow && player==0) || (fun===false && Countt==1))&&
        <CloseIcon className='O-color'/>
    }
    </div>
  )
}
export default Box