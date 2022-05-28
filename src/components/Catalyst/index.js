import "./index.scss";
import Loader from "react-loaders";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";

const Catalyst = () => {
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
          <h1>Catalyst Black</h1>
          <p>
            In 2022, I joined Super Evil Megacorp in the position of Media
            Artist to help show to the public the game we were working on,
            Catalyst Black.
          </p>
          <p>
            The position taught me valuable lessons in game capture and motion
            graphics, as well as how to collaborate on projects with other
            people, and the best way to deal with information hygiene in the
            workplace.
          </p>
          <p>
            Catalyst Black came out on May 25th, 2022 to a resounding success.
            You can check out a selection of pieces made by me on the right
            side.
          </p>
          <a href="https://catalystblack.com/" target="_blank">
            CATALYST BLACK WEBSITE
          </a>
        </div>
        <div className="player-zone">
          <Carousel
            renderItem={customRenderItem}
            renderThumbs={customRenderThumb}
          >
            <ReactPlayer
              key="youtube-1"
              url="https://www.youtube.com/embed/ZEYgYN6In0Y"
            />
            <ReactPlayer
              key="youtube-2"
              url="https://www.youtube.com/embed/O4f6ppjxs0Q"
            />
            <ReactPlayer
              key="youtube-3"
              url="https://www.youtube.com/embed/db1BNWEc3E8"
            />
          </Carousel>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default Catalyst;
