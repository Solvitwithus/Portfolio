import React, { useState } from 'react';
import './footer.css';
import In from './Assets/in.png';
import ig from './Assets/ig.png'
import Fb from './Assets/fb.png'
import Twitter from './Assets/twitter.png'
import Youtube from './Assets/utub.png'
import Location from './Assets/location.png'
function Footer(){

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    return(
        <section id='footer'>
            <div id ='upperfoot'>
<div id='left'>
     <span id ='kamiru'>Kamiru.</span>
     <p class='text'>Career:&nbsp;Information Technology</p>
    
   
     <p class='text1'>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+254 746741528</p>
     <p class='text1'>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kamirujohn344@gmail.com</p>
     <div class="container" ><img src={Location} alt='location' class='iconloc'/> <span class='text1'>Nairobi,Kenya</span></div>
     <div id='socialicons'>
       
       <a href='https://github.com/Solvitwithus' title='git hub' target='new'><img src='https://cdn-icons-png.flaticon.com/512/2111/2111374.png' alt='github' class='icon2'/></a>
       <a href='https://www.linkedin.com/in/john-kamiru-3373152b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' title='linked in' target='new'><img src={In} alt='linked in' class='icon'/></a>
       <a href='https://www.instagram.com/johnkamiru?igsh=MWs5aDFpMmhlazBqYg== ' title='Instagram' target='new'><img src={ig} alt='IG' class='icon'/></a>
       <a href='https://www.facebook.com/profile.php?id=100084813368599&mibextid=ZbWKwL' title='facebook' target='new'><img src={Fb} alt='FaceBook' class='icon'/></a>
        <a href='https://www.youtube.com/channel/UChl-89-yo67lLDE0YATUc-A' title='Youtube' target='new'><img src={Youtube} alt='You Tube' class='icon3'/></a>
       <a href='https://twitter.com/johnmwa77741640' title='Twitter' target='new'><img src={Twitter} alt='Twitter' class='icon1'/></a>
       <a href='https://pin.it/4XZr6vcal' title='Pinterest' target='new'><img src='https://th.bing.com/th/id/R.d3d175e560ae133f1ed5cd4ec173751a?rik=VFEimGFpHT5Puw&pid=ImgRaw&r=0' alt='Pintererst' class='icon'/></a>
      
    </div>

    <div id='copyright'>
      <p id='copyright'>&copy;2024 Kamiru Jm. All rights reserved</p>
    </div>
    
</div>
<div id='right'>
<p>Comments and inquiries </p>
<div id='padtop'>
    <label >
<input type="text" placeholder="Enter comment or inquiry " id='input'/>
</label>
    <button id='btn1'>Send</button>
<br/>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id='checkbox'
        />
      
       <span id='checktext'> By checking this box you agree that you are atleast 16years of age</span>
   
</div>


      


</div>
              </div>
            
 

            
        </section>
    )
}
export default Footer;