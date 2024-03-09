import './about.css'
import profile from './Assets/prof.jpg'
function About(){
    return(
        <section id='skills'>
            <span id='skilltitle'>What I do</span><br/>
            <span id='skilldesc'>As a web and Android designer/developer, I create captivating digital experiences. With an eye for aesthetics and a passion for code, I craft visually stunning websites and mobile apps. From wireframing to UI/UX design and front-end development, I bring designs to life with clean code and seamless functionality. Focused on delivering innovative solutions and engaging interfaces, I strive to create memorable digital experiences.</span>
        <div id='skillbars'>
            <div id='skillbar'>
            <img src='https://th.bing.com/th/id/OIP.O3IrCWmg7m-3KWQQWz2wrgHaHa?rs=1&pid=ImgDetMain' alt='uxdesign '   class='skillimg'/>
            <div id='skillbartext'>
                <h2>UI/UX Design</h2>
                <p>With expertise in UI/UX design for websites and apps, I excel at creating visually appealing and user-friendly interfaces. By combining aesthetics with a deep understanding of user needs, I craft seamless experiences that drive engagement and satisfaction. </p>
            </div>
            </div>
            <div id='skillbar'>
            <img src='https://img.freepik.com/premium-vector/web-developer-logo-template_674356-207.jpg' alt='webdev' class='skillimg'/>      
            <div id='skillbartext'>
                <h2>Web3 Website Development</h2>
                <p>With a mastery in website development, I specialize in crafting stunning and interactive online experiences. From dynamic front-end designs to robust back-end implementations, I bring your vision to life with precision and flair. By harnessing cutting-edge technologies, I create captivating websites that captivate users and leave a lasting impression.</p>
            </div>
            </div>
            <div id='skillbar'>
            <img src='https://th.bing.com/th/id/R.4ae337a57d80cfe589528ac242d4fa74?rik=xmaQKUw5eT4uIw&pid=ImgRaw&r=0' alt='androiddev' class='skillimg'/>      
            <div id='skillbartext'>
                <h2>Android App Development</h2>
                <p>With a passion for Android app development, I excel at building captivating and feature-rich mobile experiences. From sleek UI designs to robust functionality, I create immersive apps that engage users and enhance their digital interactions. Leveraging the latest technologies and best practices, I deliver seamless performance and intuitive user experiences.</p>
            </div>
            </div>
        </div>
        
        
        
        </section>
    )
}
export default About;