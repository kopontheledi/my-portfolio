import { Link } from "react-router-dom";
import classes from './Style.module.css'


export default function MainNavigation(){
    return ( 
    <div>
        <header className={classes.header}>
            <div className={classes.name}>
                <h1>Kopo Ntheledi</h1>
                {/* <h2>Junior Software Developer</h2> */}
                {/* <img
                src="./Images/professional.jpg"
                width={150}
                height={150}

                /> */}
            </div>
       <nav className={classes.nav}>
        <ul>
            <li>
               <Link to='/'>Home</Link> 
            </li>

            <li>
               <Link to='/about'>About</Link> 
            </li>

            <li>
               <Link to='/portfolio'>Projects</Link> 
            </li>

            <li>
               <Link to='/contact'>Contact Details</Link> 
            </li>
        </ul>
        </nav>
        </header>
    </div>
    )
}