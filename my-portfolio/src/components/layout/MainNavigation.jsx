import { Link } from "react-router-dom"


export default function MainNavigation(){
    return ( 
    <div>
        <header>
            <div>
                <h2>Kopo Ntheledi</h2>
            </div>
       <nav>
        <ul>
            <li>
               <Link to='/'>Home</Link> 
            </li>

            <li>
               <Link to='/about'>About</Link> 
            </li>

            <li>
               <Link to='/portfolio'>Portfolio</Link> 
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