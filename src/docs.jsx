import './docs.css';
import Bango from './Assets/bango.png'
import Mmu from './Assets/mmu.png'
import Ryma from './Assets/immaculate.png'
function Documents(){
    return(
        <>  
        <h2 id='education' >Education and Professional Background</h2>
              <section id='innersec'>
            
            
            <div id='innermost1'>
            <h3>Primary Education</h3>
                <div class='lognname'>
                <img src={Ryma} alt='baringo school' id='logo'/>
                <p class='paragraph'>The Immaculate Mother Parochial School &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022 - 2026</p>
                </div>
                <h3>High School Education</h3>
                <div class='lognname'>
                <img src={Bango} alt='baringo school' id='logo'/>
                <p class='paragraph'>The Baringo School &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018 - 2021</p>
                </div>
                <h3>Higher Education</h3>
                <div class='lognname'>
                <img src={Mmu} alt='baringo school' id='logo'/>
                <p class='paragraph'>Multimedia University Of Kenya &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022 - 2026</p>
                </div>
            </div>
           
            <div id='innermost2'>
                   <h3>Business Card</h3>
                   <p class='paragraph2'>Get my business card by clicking <a href='https://www.canva.com/design/DAF-etGtYcI/FqGMrnQx7TzpB2QknQ9u0g/view?utm_content=DAF-etGtYcI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview ' title='card' target='new'>here</a></p>
                   <h3>Resume</h3>
                   <p class='paragraph2'>Get my resume by clicking <a href='https://www.canva.com/design/DAF-etGtYcI/FqGMrnQx7TzpB2QknQ9u0g/view?utm_content=DAF-etGtYcI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview ' title='card' target='new'>here</a></p>
                   <h3>Curriculum Vitae (CV)</h3>
                   <p class='paragraph2'>Get my Curriculum Vitae by clicking <a href='https://www.canva.com/design/DAF-etGtYcI/FqGMrnQx7TzpB2QknQ9u0g/view?utm_content=DAF-etGtYcI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview ' title='card' target='new'>here</a></p>
            </div>
          
        </section>
        </>

    )
}
export default Documents;