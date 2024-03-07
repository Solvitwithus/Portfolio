import './navigation.css'
import logo from './Assets/icon.png'
import message from './Assets/mesageicon.png'
import {Link} from 'react-scroll'
function Navigation() {
    const handleContactMeClick = () => {
        window.open('https://wa.me/254746741528', '_blank');
      };
    return(
        <>
   <nav id='navbar'>
    <img src={logo} alt='Logo' id='image'/>
    <div>
<Link class='desktopmenu'>Home</Link>
<Link class='desktopmenu'>About</Link>
<Link class='desktopmenu'>Certification</Link>
<Link class='desktopmenu'>Contact</Link>
    </div>
    <button id='deskbtn' onClick={handleContactMeClick}>
        <img src={message} alt='Message' id='mesageimg' />Contact Me
    </button>
   </nav>
        </>
    )
}
export default Navigation;