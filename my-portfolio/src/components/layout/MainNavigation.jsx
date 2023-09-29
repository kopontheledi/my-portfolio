import { Link } from "react-router-dom";
import classes from './'


export default function MainNavigation(){
    return ( 
    <div>
        <header className={classes.header}>
            <div className={classes.name}>
                <h2>Kopo Ntheledi</h2>
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