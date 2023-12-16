import { createSlice } from '@reduxjs/toolkit'
import React from 'react';

export const Slice = createSlice({
name:"store",
initialState:{
    ID:[],
    empty:[],
    FinalRandom:[], 
    DoubleArr:[],    
    ActivArr:[],
    newrandom:[],
    RandomArray:[],
    WinArr:[[1,2,3],
    [3,2,1],
    [6,5,4],
    [4,5,6],
    [7,8,9],
    [9,8,7]
    ,[1,4,7],
    [7,4,1]
    ,[2,5,8],
    [8,5,2]
    ,[3,6,9],
    [9,6,3]
    ,[1,5,9],
    [9,5,1],
    [3,5,7],[7,5,3]],
    Countt:null,
    result:'',
    message:"",
    sum1:localStorage.getItem("score player o"),
    sum0:localStorage.getItem("score player x"),
    names:{},
    Finalresults:[]
},
reducers:{
    sums:(state)=>{
state.sum0=0
state.sum1=0
    },
    addId:(state,action)=>{
        if(!state.ActivArr.includes(action.payload))    
        state.ActivArr.push(action.payload)
        // console.log(action.payload)
    },
    Names:(state,action)=>{
state.names = action.payload
    },
    Win:(state)=>{
        let arr = state.ActivArr
        if(arr.length>=3){
outLoop: for(let i=0;i<arr.length;i++){
    let number1=arr[i].status;//true
    let Number1ID=arr[i].id;//1
         for(let j=0;j<arr.length;j++){
              if(arr[j].status==number1){
                 let number2= arr[j].status;
                 let Number2ID=arr[j].id;
             for(let k=0;k<arr.length;k++){
                if(arr[k].status==number2){
                    let number3=arr[k].status;
                    let Number3ID=arr[k].id;
                for(let l=0;l<state.WinArr.length;l++){
                       if(Number1ID===state.WinArr[l][0]&&
                        Number2ID===state.WinArr[l][1]&&
                        Number3ID===state.WinArr[l][2]){
                            // state.result="Wins"
                            if(number1 == number2 ==number3 ==(true||1)){
                                if(localStorage.getItem("name1Value")=="o")
                                state.result=`${localStorage.getItem("name1")} wins`
                                else{
                                    state.result=`${localStorage.getItem("name2")} wins`

                                }
                                state.sum1++;
                                localStorage.setItem("score player o",state.sum1)
                            }
                            else{
                                if(localStorage.getItem("name2Value")=="x")
                                state.result=`${localStorage.getItem("name2")} wins`
                                else{
                                    state.result=`${localStorage.getItem("name1")} wins`

                                }
                                state.sum0++;
                                localStorage.setItem("score player x",state.sum0)
                            }
                            // console.log("hello from the win arr");
                            break outLoop;
                        }
                    }
                }
         }
        }
}
}
}
    },
    Count:(state,action)=>{
     state.Countt= action.payload  
//    //////  if(state.Countt== 1 ||state.Countt== true){
// ////////state.sum1 = state.sum1+1
//    ///////  }
//    /////  else if(state.Countt== 0 ||state.Countt== false){
//     ///////    state.sum0 = state.sum0+1
///////      }
    },
//     Random:(state)=>{
//   let ran = Math.floor(Math.random() * 9 +1 );
//   if(!state.RandomArray.includes(ran)){
// state.RandomArray.push(ran)
// }
// else{
//     while(state.RandomArray.includes(ran)){
//         ran = Math.floor(Math.random() * 9 + 1);
//     }
//     state.RandomArray.push(ran);
// }
//     },

    NewRandom:(state)=>{
        for(let i=0;i<state.ActivArr.length;i++){
            for(let j=0;j<state.DoubleArr.length;j++){
                if(state.ActivArr[i].id!==state.DoubleArr[j].id){
                  if(!state.empty.includes(state.DoubleArr[j].id)){
                    state.empty.push(state.DoubleArr[j].id)
                    state.newrandom.push(state.DoubleArr[j]);
                    state.FinalRandom.push(state.DoubleArr[j]);

                  }
                }
            }
        }
    //     state.ActivArr.map((ele)=>{
    //         state.newrandom=state.DoubleArr.filter((ele2)=>{
    //    return( (ele.axis.x!=ele2.x) || (ele.axis.y!=ele2.y));
    //    })
    //    })
    },
    cpu:(state,action)=>{
let X=action.payload.x;
let Y=action.payload.y;
if(X=='1' && Y=='1'){
    let axisArr = [{x:'2',y:'1',id:4},{x:'2',y:'2',id:5},{x:'1',y:'2',id:2}];
    let ran = Math.floor(Math.random() * 3 );
if(!state.ID.includes(axisArr[ran].id)){
state.ID.push(axisArr[ran].id);
state.DoubleArr.push(axisArr[ran]);
}
else{
 while(state.ID.includes(axisArr[ran].id)){
     ran = Math.floor(Math.random() * 3 );
}
state.ID.push(axisArr[ran].id)
state.DoubleArr(axisArr[ran])
}    
    // if(state.DoubleArr.length==0){
    //     state.empty.push(axisArr[ran])
    //     state.DoubleArr.push(axisArr[ran])
    // }
    // else if(state.DoubleArr.length>0){
    // for(let i=0;i<state.DoubleArr.length;i++){
    // if(state.DoubleArr[i].id!==axisArr[ran].id){// 
    //     state.empty.push(axisArr[ran])
    
    // }
    // else while(state.DoubleArr[i].id==axisArr[ran].id){
    //      ran = Math.floor(Math.random() * 3);
    // }
    // state.empty.push(axisArr[ran])
    
    // }
    }
    // if(!state.DoubleArr.includes(axisArr[ran])){
    //     state.DoubleArr.push(axisArr[ran])
    //     }
    //     else{
    //         while(state.DoubleArr.includes(axisArr[ran])){
    //  ran = Math.floor(Math.random() * 3 );        
    //         }
    //     state.DoubleArr.push(axisArr[ran])
    //     }

////////////////////////////////
//     while(state.DoubleArr.includes(axisArr[ran])){
// ran = Math.floor(Math.random() * 3 );
//     }
//     if(!state.DoubleArr.includes(axisArr[ran])){
//         // console.log(true)
//   state.DoubleArr.push(axisArr[ran])
//   }
// }

if(X=='1' && Y=='2'){
    let axisArr = [{x:'1',y:'1',id:1},{x:'1',y:'3',id:3},{x:'2',y:'2',id:5}];
    let ran = Math.floor(Math.random() * 3 );
    //  ran = Math.floor(Math.random() * 3 );
    if(!state.ID.includes(axisArr[ran].id)){
        state.ID.push(axisArr[ran].id);
        state.DoubleArr.push(axisArr[ran]);
        }
        else{
         while(state.ID.includes(axisArr[ran].id)){
             ran = Math.floor(Math.random() * 3 );
        }
        state.ID.push(axisArr[ran].id)
        state.DoubleArr(axisArr[ran])
        }  
    // if(!state.DoubleArr.includes(axisArr[ran])){
    //     state.DoubleArr.push(axisArr[ran])
    //     }
    //     else{
    //         while(state.DoubleArr.includes(axisArr[ran])){
    //  ran = Math.floor(Math.random() * 3 );        
    //         }
    //     state.DoubleArr.push(axisArr[ran])
    //     }
}
if(X=='1' && Y=='3'){
    let axisArr = [{x:'1',y:'2',id:2},{x:'2',y:'2',id:5},{x:'2',y:'3',id:6}];
    let ran = Math.floor(Math.random() * 3 );
//  ran = Math.floor(Math.random() * 3 );
if(!state.ID.includes(axisArr[ran].id)){
    state.ID.push(axisArr[ran].id);
    state.DoubleArr.push(axisArr[ran]);
    }
    else{
     while(state.ID.includes(axisArr[ran].id)){
         ran = Math.floor(Math.random() * 3 );
    }
    state.ID.push(axisArr[ran].id)
    state.DoubleArr(axisArr[ran])
    }  

    // if(!state.DoubleArr.includes(axisArr[ran])){
    //     state.DoubleArr.push(axisArr[ran])
    //     }
    //     else{
    //         while(state.DoubleArr.includes(axisArr[ran])){
    //  ran = Math.floor(Math.random() * 3 );        
    //         }
    //     state.DoubleArr.push(axisArr[ran])
    //     }
}
if(X=='2' && Y=='1'){
    let axisArr = [{x:'1',y:'1',id:1},{x:'2',y:'2',id:5},{x:'3',y:'1',id:7}];
    let ran = Math.floor(Math.random() * 3 );
//  ran = Math.floor(Math.random() * 3 );
    // if(!state.DoubleArr.includes(axisArr[ran])){
    //     state.DoubleArr.push(axisArr[ran])
    //     }
    //     else{
    //         while(state.DoubleArr.includes(axisArr[ran])){
    //  ran = Math.floor(Math.random() * 3 );        
    //         }
    //     state.DoubleArr.push(axisArr[ran])
    //     }
    if(!state.ID.includes(axisArr[ran].id)){
        state.ID.push(axisArr[ran].id);
        state.DoubleArr.push(axisArr[ran]);
        }
        else{
         while(state.ID.includes(axisArr[ran].id)){
             ran = Math.floor(Math.random() * 3 );
        }
        state.ID.push(axisArr[ran].id)
        state.DoubleArr(axisArr[ran])
        }  

}
if(X=='2' && Y=='2'){
    let axisArr = [{x:'1',y:'2',id:2},{x:'2',y:'1',id:4},{x:'2',y:'3',id:6},{x:'3',y:'2',id:8}];
    let ran = Math.floor(Math.random() * 4 );
    //  ran = Math.floor(Math.random() * 4 );
    // if(!state.DoubleArr.includes(axisArr[ran])){
    //     state.DoubleArr.push(axisArr[ran])
    //     }
    //     else{
    //         while(state.DoubleArr.includes(axisArr[ran])){
    //  ran = Math.floor(Math.random() * 3 );        
    //         }
    //     state.DoubleArr.push(axisArr[ran])
    //     }

    if(!state.ID.includes(axisArr[ran].id)){
        state.ID.push(axisArr[ran].id);
        state.DoubleArr.push(axisArr[ran]);
        }
        else{
         while(state.ID.includes(axisArr[ran].id)){
             ran = Math.floor(Math.random() * 4 );
        }
        state.ID.push(axisArr[ran].id)
        state.DoubleArr(axisArr[ran])
        }  
}
if(X=='2' && Y=='3'){
    let axisArr = [{x:'1',y:'3',id:3},{x:'2',y:'2',id:5},{x:'3',y:'3',id:9}];
    let ran = Math.floor(Math.random() * 3 );
//  ran = Math.floor(Math.random() * 3 );
if(!state.ID.includes(axisArr[ran].id)){
    state.ID.push(axisArr[ran].id);
    state.DoubleArr.push(axisArr[ran]);
    }
    else{
     while(state.ID.includes(axisArr[ran].id)){
         ran = Math.floor(Math.random() * 3 );
    }
    state.ID.push(axisArr[ran].id)
    state.DoubleArr(axisArr[ran])
    }  
}
if(X=='3' && Y=='1'){
    let axisArr = [{x:'2',y:'1',id:4},{x:'2',y:'2',id:5},{x:'3',y:'2',id:8}];
    let ran = Math.floor(Math.random() * 3 );
//  ran = Math.floor(Math.random() * 3 );
if(!state.ID.includes(axisArr[ran].id)){
    state.ID.push(axisArr[ran].id);
    state.DoubleArr.push(axisArr[ran]);
    }
    else{
     while(state.ID.includes(axisArr[ran].id)){
         ran = Math.floor(Math.random() * 3 );
    }
    state.ID.push(axisArr[ran].id)
    state.DoubleArr(axisArr[ran])
    }  

}
if(X=='3' && Y=='2'){
    let axisArr = [{x:'3',y:'1',id:7},{x:'3',y:'3',id:9},{x:'2',y:'2',id:5}];
    let ran = Math.floor(Math.random() * 3 );
    if(!state.ID.includes(axisArr[ran].id)){
        state.ID.push(axisArr[ran].id);
        state.DoubleArr.push(axisArr[ran]);
        }
        else{
         while(state.ID.includes(axisArr[ran].id)){
             ran = Math.floor(Math.random() * 3 );
        }
        state.ID.push(axisArr[ran].id)
        state.DoubleArr(axisArr[ran])
        }  
}
if(X=='3' && Y=='3'){
    let axisArr = [{x:'2',y:'3',id:6},{x:'2',y:'2',id:5},{x:'3',y:'2',id:8}];
    let ran = Math.floor(Math.random() * 3 );
    if(!state.ID.includes(axisArr[ran].id)){
        state.ID.push(axisArr[ran].id);
        state.DoubleArr.push(axisArr[ran]);
        }
        else{
         while(state.ID.includes(axisArr[ran].id)){
             ran = Math.floor(Math.random() * 3 );
        }
        state.ID.push(axisArr[ran].id)
        state.DoubleArr(axisArr[ran])
        }  
}
    },Message:(state , action)=>{
state.message =action.payload
    },
    FinalResult:(state,action)=>{
state.Finalresults.push(action.payload)
    }
    // Filter:(state)=>{
        // for(let i=0;i<state.ActivArr.length;i++){
        //     for(let j=0;j<state.newrandom.length;j++){
        //         if((state.ActivArr[i].axis.x!==state.newrandom[j].x)||(state.ActivArr[i].axis.y!==state.newrandom[j].y)){
        // if(!(state.FinalRandom.includes(state.newrandom[j]))){
        // console.log('mission')
        //     state.FinalRandom.push(state.newrandom[j]);
        // }
        // }
        // }
        // }



    // },
}
})
export const {FinalResult,Names,addId ,Win ,Message,Count ,sums,Random ,NewRandom,cpu,Filter} =  Slice.actions
export default Slice.reducer