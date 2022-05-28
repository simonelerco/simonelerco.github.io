import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import Loader from "react-loaders";

const Youtube = () => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} />;
    });

  return (
    <>
      <div className="container youtube-page">
        <div className="text-zone">
          <h1>Baby Pigman</h1>
          <p>
            In 2019, I decided to start a YouTube channel dedicated to
            highlighting streams of my favorite youtuber, Northernlion.
          </p>
          <p>
            This taught me how to work on big projects, with runtimes of several
            hours, as well as how to grow a brand from nothing up to 15.000+
            subscribers. I even managed to get one video to 1.5 million views!
          </p>
          <p>
            On the right you can find a selection the best stuff I produced over
            the years.
          </p>
        </div>
        <div className="player-zone">
          <Carousel
            renderItem={customRenderItem}
            renderThumbs={customRenderThumb}
          >
            <ReactPlayer
              key="youtube-1"
              url="https://www.youtube.com/embed/k6RfTqBR_xA"
            />
            <ReactPlayer
              key="youtube-2"
              url="https://www.youtube.com/embed/eQsdsct4s34"
            />
            <ReactPlayer
              key="youtube-3"
              url="https://www.youtube.com/embed/JcvuMViZKJk"
            />
          </Carousel>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default Youtube;
