import "./index.scss";
import Loader from "react-loaders";
import cb from "../../../src/assets/images/cb_thanks.jpg";

const Catalyst = () => {
    return (
        <>
            <div className="container catalyst-page">
                <div className="text-zone">
                    <h1>Catalyst Black</h1>
                    <p>
                        In 2022, I joined Super Evil Megacorp in the position of
                        Media Artist to help show to the public the game we were
                        working on, Catalyst Black.
                    </p>
                    <p>
                        The position taught me valuable lessons in game capture
                        and motion graphics, as well as how to collaborate on
                        projects with other people, and the best way to deal
                        with information hygiene in the workplace.
                    </p>
                    <p>
                        Catalyst Black came out on May 25th, 2022 to a
                        resounding success. You can check out a selection of
                        pieces made by me on the right side.
                    </p>
                    <a href="https://catalystblack.com/" target="_blank">
                        CATALYST BLACK WEBSITE
                    </a>
                </div>
                <div className="image-zone">
                    <div className="image-container">
                        <img src={cb} alt="catalyst black" />
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    );
};

export default Catalyst;
