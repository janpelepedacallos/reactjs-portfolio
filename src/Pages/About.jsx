import './about-style.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div className="about"
        
        initial={{
            opacity: 0,
            translateX: '-20%'
        }}
        animate={{
            opacity: 1,
            translateX: '0'
        }}
        exit={{
            opacity: 0,
            translateX: '-20%'
        }}>
            <div className="about-details">
                <h4>Hi, I'm <span>Jan Phillip M. Dacallos</span></h4>
                <h1><span>A Graphic Designer and Full Stack Developer</span></h1>
                <p>I am a graphic designer and full stack developer with 3+ years of experience in Javascript programming language
                    which specializes in Reactjs Framework. I am familiar with CodeIgniter and Laravel, aside from that, I know how
                    to work with server side applications.
                </p>

                <div className="about-buttons">
                    <a href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJvnJCVWmmHBPztHpFWZTpkFsbhSqhnhzglMDJKQtQtKJPmwnSlRrNTlmKLmSjRGZjWSVZg" target={'_blank'}>Email <img src="/src/Assets/icons/paper_plane_40px.png" alt="paper_plane_40px.png" /></a>
                    <a href="/src/Assets/my_resume.jpg" className="resumeBTN" download={'Jan Phillip Dacallos_Resume.jpg'}>Download CV <img src="/src/Assets/icons/download_from_cloud_40px.png" alt="download_from_cloud_40px.png" /></a>
                </div>
            </div>

            <div className="about-img">
                <img src="/src/Assets/_DSC0550.jpg" alt="_DSC0550.jpg" />
            </div>
        </motion.div>
    )
}

export default About;