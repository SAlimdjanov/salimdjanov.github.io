import "./Home.css";
import { Link } from "react-router-dom";
import intro from "../content/HomeContent";
import componentNames from "../content/ComponentNames";
import itemToPath from "../helpers/ConvertToPath";

function Home() {
    return (
        <>
            <h1 id="name">
                Hi, I'm <span className="angled-brackets">&lt;</span>
                <span id="first-name">Shonasir</span>
                <span className="angled-brackets">/&gt;</span>
            </h1>
            <h2 id="title">{intro.title}</h2>
            <p id="brief">{intro.brief}</p>
            <Link to={itemToPath(componentNames, "Projects")}>
                <button>Projects</button>
            </Link>
        </>
    );
}

export default Home;
