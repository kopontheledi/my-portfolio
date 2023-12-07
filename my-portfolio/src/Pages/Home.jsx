import classes from "./pages.module.css";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div>
      <div className={classes.home}>
        <div className={classes.info}>
          <h3>Hello, I am</h3>
          <h1>Kopo Ntheledi</h1>
          <TypeAnimation
            sequence={[
              "I am a passionate Junior Software Developer",
              1000,
              "I am a passionate Web Designer",
              1000,
              "I am a passionate Freelancer",
              1000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p>
            I have a strong desire to create innovative solutions and make a
            positive impact through technology. My journey in the world of
            software development started in November 2022, and I have been
            hooked ever since.
          </p>
          <a
            className={classes.iconlink}
            href='https://github.com/kopontheledi'
          >
            <button className={classes.btn}>
              <img
                className={classes.icon}
                src='public/images/github.png'
                alt=''
              />
            </button>
          </a>

          <a href='https://www.linkedin.com/in/kopo-ntheledi-30327021b/'>
            <button className={classes.btn}>
              <img
                className={classes.icon}
                src='public/images/linkedin.png'
                alt=''
              />
            </button>
          </a>
        </div>

        <div>
          <img
            className={classes.image}
            src='./Images/professional_picture.jpg'
            width={400}
            height={400}
          />
        </div>
        
      </div>
      {/* <a href='/path-to-your-cv.pdf' download='Your_CV.pdf'> */}
      <button className={classes.actions}>Download CV</button>
      {/* </a> */}
    </div>
  );
}

