import React, { useState } from 'react'
import './navigation.css'
import logo from './Assets/icon.png'
import message from './Assets/mesageicon.png'
import {Link} from 'react-scroll'
import Menu from './Assets/ham.png'
function Navigation() {
    const [showmenu,setshowmenu] = useState(false);
    const handleContactMeClick = () => {
        window.open('https://wa.me/254746741528', '_blank');
      };
    return(
        <>
   <nav id='navbar'>
    <img src={logo} alt='Logo' id='image'/>
    <div>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} class='desktopmenu'>Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} class='desktopmenu'>About</Link>
<Link activeClass='active' to='certifications-container' spy={true} smooth={true} offset={-100} duration={500} class='desktopmenu'>Certification</Link>
<Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} class='desktopmenu'>Contact</Link>
    </div>
    <button id='deskbtn' onClick={handleContactMeClick}>
        <img src={message} alt='Message' id='mesageimg' />Contact Me
        
    </button>
    <img src={Menu} alt='menu' class='hamburger' onClick={()=>setshowmenu(!showmenu)}/>
    <div class ='navmenu' style = {{display:showmenu? 'flex':'none'}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} class='phonemenu' onClick={()=>setshowmenu(false)}>Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} class='phonemenu' onClick={()=>setshowmenu(false)}>About</Link>
<Link activeClass='active' to='certifications-container' spy={true} smooth={true} offset={-100} duration={500} class='phonemenu' onClick={()=>setshowmenu(false)}>Certification</Link>
<Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} class='phonemenu' onClick={()=>setshowmenu(false)}>Contact</Link>
    </div>
   </nav>
        </>
    )
}
export default Navigation;