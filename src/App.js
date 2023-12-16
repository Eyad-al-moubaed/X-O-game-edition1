import React from 'react'
import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer"
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import SecondPage from './components/SecondPage';
import Main from './components/Main';
import FirstMain from './components/FirstMain';
function App() {
const array = [1,2,3,4,5,6,7,8,9];
  let [value,setValue] = useState(0);
// function shuffle(array){    
//   let current= array.length;
//   let random,
//   temp
// while (current >0) {
//   random = Math.floor(Math.random() * current); // 0.3 * 20
//   if(random ==value){
//   random = Math.floor(Math.random() * current); // 0.3 * 20
//   }else{
//     setValue(random);
//   }
//     current--;
//     console.log(random)
//   // temp = array[current]
//   // array[current] = array[random]
//   // array[random]=temp
// }
// return array
// }
// shuffle(array);
// console.log(Date.now() * 10e-3)

// function shuffle(){
//   for(let i=0;i<10;i++){
//   let ran = Math.floor(Math.random() * 10 +1);
  
// console.log(ran);
//   }
// }
// let Array1 = [1,2,3,4];
// let Array2 = [1,4,5];
// Array1.map((ele1)=>{
//  Array2= Array2.filter((ele2)=>{
//   return ele1!=ele2;
//   })
//   })
//   console.log(`this is array2`+Array2);
  return (
    // <BrowserRouter>
    <>
    <div className="App">
    <div className='container'>
      <Routes>
        <Route path='/'element={<FirstMain/>}/>
<Route path="/Main" element={<Main/>} />
<Route path="/second" element={<SecondPage/>}/>
      </Routes>
</div>
    </div>
    {/* </BrowserRouter> */}
    </>  
  );
}

export default App;
