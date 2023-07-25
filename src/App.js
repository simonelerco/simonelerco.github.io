import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Youtube from "./components/Youtube";
import Catalyst from "./components/Catalyst";
import Rebirth from "./components/Rebirth";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="rebirth" element={<Rebirth />} />
                    <Route path="catalyst" element={<Catalyst />} />
                    <Route path="youtube" element={<Youtube />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
