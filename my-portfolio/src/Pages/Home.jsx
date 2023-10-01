import classes from './pages.module.css'

export default function HomePage() {
  return (
    <div>
      <h3>Kopo Ntheledi is a passionate Junior Full-Stack Developer with a strong
        desire to create innovative solutions and make a positive impact through
        technology. My journey in the world of software development started in
        November 2022, and I have been hooked ever since.</h3>
        
            <a className={classes.iconlink} href="https://github.com/kopontheledi">
                <button className={classes.btn}>
                    <img className={classes.icon} src="public/images/github.png" alt=""/>
                    </button>
            </a>
        
            <a href="https://www.linkedin.com/in/kopo-ntheledi-30327021b/">
                <button className={classes.btn}>
                    <img className={classes.icon} src="public/images/linkedin.png" alt=""/>
                </button>
            </a>

            {/* <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25145618#overview">
                <button className={classes.btn}>
                    <img className={classes.icon} src="public/images/e-learning.png" alt=""/>
                </button>
            </a> */}
       
    </div>
  );
}
