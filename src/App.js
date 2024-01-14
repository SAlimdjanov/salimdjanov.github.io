import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import componentNames from "./content/ComponentNames";
import itemToPath from "./helpers/ConvertToPath";

function App() {
    return (
        <Router>
            <>
                <header>
                    <nav>
                        <Navbar />
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path={itemToPath(componentNames, "Projects")}
                            element={<Projects />}
                        />
                        <Route
                            path={itemToPath(componentNames, "About")}
                            element={<About />}
                        />
                        <Route
                            path={itemToPath(componentNames, "Experience")}
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
