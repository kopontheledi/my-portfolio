import Education from "../components/Education";
import Skills from "../components/Skills";
import classes from "./pages.module.css";

export default function About() {
  return (
    <div className={classes.about1}>
      <h2>About Me</h2>
      <div className={classes.about}>
        <div className={classes.img}>
          <img
            src='./public/Images/port1.jpg'
            alt='image'
            width={250}
            height={250}
            className={classes.staggeredImage}
          />
          <img
            src='./public/Images/port2.jpg'
            alt='image'
            width={250}
            height={250}
            className={classes.staggeredImage}
          />
          <img
            src='./public/Images/port3.jpg'
            alt='image'
            width={250}
            height={250}
            className={classes.staggeredImage}
          />
          <img
            src='./public/Images/type.jpeg'
            alt='image'
            width={250}
            height={250}
            className={classes.staggeredImage}
          />
        </div>
        <div>
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
}
