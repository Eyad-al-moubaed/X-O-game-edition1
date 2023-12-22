import React, { useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { Link } from 'react-router-dom';
function FirstMain() {
  let [allow,setallow]=useState(false)
  return (
    <div className='FirstMain'>
      <div className={allow?"hidden":""}>
<VolumeUpIcon className='large' onClick={()=>{
 setallow(!allow)
}}/>
  </div>
  <div className={allow?"":"hidden"}>
<VolumeMuteIcon className='large' onClick={()=>{
 setallow(!allow)
}}/>
  </div>
        <audio controls preload='auto' muted={allow?true:false} autoPlay loop className='hidden' src='music/Gaming_intro_Sound_Effect_Tkzx3epBqnQ_140.mp3'/>
        <h1>Warning <br/>
           
            كن حذرا
        </h1>


<p className='ghalatha'>
please be aware that there are music that will turn on when starting the game<br/>
حط ببالك انو في اغاني لح تشتغل وقت تبلش اللعبة -- يعني في حال قاعد بالمحاضرةاو بالمدرسة او حتى مع اهلك وعامل حالك عمتدرس وبدك تلعب<br/> --
انتبه الى ان اغنية سوف تبدا
</p>
<Link className='start' to="/Main">start
</Link>
    </div>
  )
}

export default FirstMain