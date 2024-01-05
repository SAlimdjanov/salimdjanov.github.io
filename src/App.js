import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import componentNames from "./content/ComponentNames";
import convertToPath from "./helpers/ConvertToPath";

function App() {
    return (
        <Router>
            <>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path={convertToPath(componentNames, "Projects")}
                            element={<Projects />}
                        />
                        <Route
                            path={convertToPath(componentNames, "About")}
                            element={<About />}
                        />
                        <Route
                            path={convertToPath(componentNames, "Experience")}
                            element={<Experience />}
                        />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        </Router>
    );
}

export default App;
