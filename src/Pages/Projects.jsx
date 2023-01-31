import { motion } from 'framer-motion'
import './projects-style.css'

const Projects = () => {
    return (
        <motion.div className="projects" 
            
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
            <div className="projects-content">
                <h1>Take a view of my <span>projects.</span></h1>
                <p>These are just few of my projects that I made recently. Work with me as we create an innovative </p>
            </div>

            <div className="projects-img">
                <img src="/src/Assets/marvel_proj.jpg" alt="marvel_proj.jpg" />
                <img src="/src/Assets/dictionary_proj.jpg" alt="dictionary_proj.jpg" />
                <img src="/src/Assets/resort_proj.jpg" alt="resort_proj.jpg" />
                <img src="/src/Assets/better-brews.jpg" alt="better-brews.jpg" />
                <img src="/src/Assets/parc.jpg" alt="parc.jpg" />
                <img src="/src/Assets/frozen-goods.jpg" alt="frozen-goods.jpg" />
            </div>

            <p className='note'><span>Hover</span> each image to reveal its color.</p>
        </motion.div>
    )
}

export default Projects;