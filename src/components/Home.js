import "./Home.css";
import { Link } from "react-router-dom";
import intro from "../content/HomeContent";
import navLinks from "../content/NavLinks";

function Home() {
    return (
        <>
            <h1 id="name">{intro.myName}</h1>
            <h2 id="title">{intro.title}</h2>
            <p id="brief">{intro.brief}</p>
            <Link to={navLinks[0].url}>
                <button>Projects</button>
            </Link>
        </>
    );
}

export default Home;
