import './home.css';
import {Link} from 'react-scroll';
import suitcase from './Assets/hire.png'
import profile from './Assets/prof.jpg'
function Home(){
    return(
        <section id='intro'>
            <div id='introcontent'>
                <span id='hello'>Hello,<br/></span>
                <span id='introtext'>I'm <span id='introname'> John Kamiru</span><br/>Web,<br/>Android<br/> designer and developer</span>
                <p id='pintro'>
                Welcome to my portfolio! I'm a web and Android designer and developer <br/>specializing in creating captivating digital experiences. With a focus on front-end <br/>development, UI/UX design, and mobile app development, I bring ideas to life <br/>through innovative designs and clean code. Let's collaborate <br/>and turn your digital vision into reality!
                </p>
                <Link><button id='btn'><img src={suitcase} alt='hireme' id='btnimg'/>Hire me</button></Link>
            </div>
            <img src={profile} alt='profile' id='profilepik'/>
          
        </section>
        
    )
}
export default Home;