import React from 'react'
import {useSelector} from 'react-redux';
import "../App.css"
import Message from './Message';
import AudioPlayer from 'react-audio-player';
function Footer() {
  let {result,Countt}=useSelector(state =>state.container)
  console.log(result);
  return (
    <div className='Footer'>     
      {result && <AudioPlayer autoPlay className='hidden' src='../music/Coin_Collect_Jackpot_Win_Sound_Fx_Download_Free_Downloa_Fn3ipwTA9xA.mp3'/>
      }
      {result}
      <div className='notification'>
        <Message/>
        </div>  
    </div> 
  )
}

export default Footer