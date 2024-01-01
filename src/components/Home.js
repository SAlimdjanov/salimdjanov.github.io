import "./Home.css";
import intro from "../content/HomeContent";

function Home() {
    return (
        <>
            <h1 id="name">{intro.myName}</h1>
            <h2 id="title">{intro.title}</h2>
            <p id="brief">{intro.brief}</p>
            <button>Projects</button>
        </>
    );
}

export default Home;
