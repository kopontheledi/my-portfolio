import Education from "../components/Education";
import Skills from "../components/Skills";
import classes from './pages.module.css'


export default function About () {
    return ( 
    <div className={classes.about1}> 
    <h2>About Me</h2>
    <div className={classes.about}>
    <div className={classes.img}>
        <img src="./public/Images/port1.jpg" alt="image" width={250} height={250} />
        <img src="./public/Images/port2.jpg" alt="image" width={250} height={250} />
        <img src="./public/Images/port3.jpg" alt="image" width={250} height={250} />
        <img src="./public/Images/type.jpeg" alt="image" width={250} height={250} />
    </div>
    
   
    {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0px' }}>
        <img src="./public/Images/instagram.jpg" alt="Image 1" style={{ width: '50%', height: '50%' }} />
        <img src="./public/Images/professional.jpg" alt="Image 2" style={{ width: '50%', height: '50%' }} />
        <img src="image3.jpg" alt="Image 3" style={{ width: '50%', height: '50%' }} />
        <video src="./public/Images/whatsapp" controls style={{ width: '50%', height: '50%' }} />
      </div> */}
    <div>
    <Education />
    <Skills />
    </div>
    </div>
    </div>

        
    )
}
