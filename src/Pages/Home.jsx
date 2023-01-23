import './home-style.css'
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
    return (
            <motion.div 
            className="home" 
            
            initial={{translateX: "-200%"}}
            animate={{translateX: "0"}}
            exit={{translateX: "200%"}}>
            <div className="profile-details">
                <h1>Hello, I'm <span>Jan Phillip</span></h1>
                <p><span>Graphics Designer / Full Stack Developer</span></p>
                <p>High level experience in graphic designing, web/software development, and server side knowledge wherein I produce high
                    quality work in each them.
                </p>

                <Link to="/contact" className="resumeBtn">Contact <img src="/src/Assets/icons/paper_plane_40px.png" alt="paper_plane_40px.png" /></Link>
            </div>

            <div className="profile-picture">
                <img src="/src/Assets/pelep.jpg" alt="pelep.jpg" />
            </div>
        </motion.div>
    )
}

export default Home;