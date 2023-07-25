import "./index.scss";
import Loader from "react-loaders";
import tmnt from "../../../src/assets/images/tmnt.jpg";
// import ReactPlayer from "react-player";
// import { Carousel } from "react-responsive-carousel";

const Rebirth = () => {
    // const customRenderItem = (item, props) => (
    //     <item.type {...item.props} {...props} />
    // );

    // const getVideoThumb = (videoId) =>
    //     `https://img.youtube.com/vi/${videoId}/default.jpg`;

    // const getVideoId = (url) =>
    //     url.substr("https://www.youtube.com/embed/".length, url.length);

    // const customRenderThumb = (children) =>
    //     children.map((item) => {
    //         const videoId = getVideoId(item.props.url);
    //         return <img src={getVideoThumb(videoId)} />;
    //     });

    return (
        <>
            <div className="container rebirth-page">
                <div className="text-zone">
                    <h1>TMNT Splintered Fate </h1>
                    <p>
                        After the successful release of our previous project,
                        Catalyst Black, I've moved to a design position for a
                        Hades-inspired roguelike set in the world of the Ninja
                        Turtles!
                    </p>
                    <p>
                        In this position, I was tasked with implementing all of
                        the game's branching narrative, which gave me insight on
                        a number of important aspects related to best practices,
                        code cleanliness, information sharing, and navigating an
                        unfamiliar codebase.
                    </p>
                </div>
                <div className="image-zone">
                    <div className="image-container">
                        <img src={tmnt} alt="tmnt splintered fate" />
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default Rebirth;
