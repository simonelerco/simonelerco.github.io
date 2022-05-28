import Loader from "react-loaders";
import pfp from "../../../src/assets/images/pfp.jpg";
import "./index.scss";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            Hi! My name is Simone. I'm a creative and passionate individual who
            specializes in content creation. Despite my formal education in
            STEM, I found my true calling in the creative field. I love learning
            new things and I believe information clarity is paramount in a
            workplace.
          </p>
          <p>
            I started video editing several years ago just for fun, and the
            fervor never left! I love being able to share what i create with
            other people.
          </p>
          <p>
            In my spare time, I love playing videogames and expressing my
            creativity through different media. My hobbies range from painting
            to embroidering, and I'm recently trying to get into 3D art. I am
            also very passionate about cooking!
          </p>
        </div>
        <div className="image-zone">
          <div className="image-container">
            <img src={pfp} alt="me with a big pan of paella" />
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default About;
