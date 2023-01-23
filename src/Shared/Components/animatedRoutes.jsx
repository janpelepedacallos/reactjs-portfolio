import { Routes, Route, useLocation } from 'react-router-dom'

import About from "../../Pages/About"
import Skills from "../../Pages/Skills";
import Projects from "../../Pages/Projects";
import Contact from "../../Pages/Contact";
import Home from '../../Pages/Home';

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {

    return (
        <div className="animated-routes">
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/about" element={ <About/> } />
                    <Route path="/skills" element={ <Skills /> } />
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/contact" element={ <Contact /> } />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes;