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
                        Hey, My name is Simone! I'm a creative and passionate
                        individual who specializes in game design. Despite my
                        formal education in STEM, I found my true calling in the
                        creative field. I love learning new things and I believe
                        information clarity is paramount in the workplace.
                    </p>
                    <p>
                        I believe the greatest pleasure in life is being able to
                        share what you create with other people, and game
                        development perfectly scratches that itch.
                    </p>
                    <p>
                        In my spare time, I love playing videogames and
                        expressing my creativity through different media. My
                        hobbies range from painting to embroidering, and I've
                        been playing guitar for almost 15 years. I am also very
                        passionate about cooking!
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
