import './docs.css';
import cv from './CV/CIRRICULUM VITAE..docx'
function Documents(){
    return(
        <>  
        <h2 id='education' >Education and Professional Profile</h2>
              <section id='innersec'>
           
           
            <div id='innermost2'>
                   <h3>Business Card</h3>
                   <p class='paragraph2'>Get my business card by clicking <a href='https://www.canva.com/design/DAF-etGtYcI/pTjbu_V6bamIJ4TrNXpEFw/view?utm_content=DAF-etGtYcI&utm_campaign=designshare&utm_medium=link&utm_source=editor' title='card' target='new'>here</a></p>
                   <h3>Resume</h3>
                   <p class='paragraph2'>Get my resume by clicking <a href='https://www.canva.com/design/DAF-ig7Dc4A/ZEYIawH3p9i-PVz7piu-IA/view?utm_content=DAF-ig7Dc4A&utm_campaign=designshare&utm_medium=link&utm_source=editor' title='card' target='new'>here</a></p>

            </div>
            <div id='cv'>
            <h3>Curriculum Vitae (CV)</h3>
                   <p class='paragraph2'>Get my Curriculum Vitae by clicking <a href={cv} title='card' target='new'>here</a></p>
                   </div>
        </section>
        </>

    )
}
export default Documents;