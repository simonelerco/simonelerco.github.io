import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faEnvelope,
    faMoon,
    faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import {
    faItchIo,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="rebirth-link"
                to="/rebirth"
            >
                <FontAwesomeIcon icon={faPizzaSlice} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="catalyst-link"
                to="/catalyst"
            >
                <FontAwesomeIcon icon={faMoon} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="youtube-link"
                to="/youtube"
            >
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    red="noreferrer"
                    href="https://twitter.com/pigman_baby"
                >
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    red="noreferrer"
                    href="https://www.linkedin.com/in/simone-lerco-12478b15b/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    red="noreferrer"
                    href="https://baby-pigman.itch.io/"
                >
                    <FontAwesomeIcon icon={faItchIo} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
