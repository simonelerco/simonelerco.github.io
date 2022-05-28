import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm Simone Lerco <br /> Media Artist
          </h1>
          <h2>Community Content Creator / Video Editor</h2>

          <a
            href="https://drive.google.com/file/d/1LL2o2uXoxNUxEMhtSvcFwwmJX9d_Oik9/view?usp=sharing"
            target="_blank"
          >
            RESUME
          </a>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default Home;
