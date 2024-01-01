import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import navLinks from "./content/NavLinks";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

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
                            path={navLinks[0].component}
                            element={<Projects />}
                        />
                        <Route
                            path={navLinks[1].component}
                            element={<About />}
                        />
                        <Route
                            path={navLinks[2].component}
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
