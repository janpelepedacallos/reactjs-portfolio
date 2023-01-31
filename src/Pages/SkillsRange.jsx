import './skillsRange-style.css'
import { motion } from 'framer-motion'

const HTML_SkillRange = () => {
    return (
        <motion.div className="skills-range"
        initial={{
            opacity: 0,
            translateY: '-20%'
        }}
        animate={{
            opacity: 1,
            translateY: '0'
        }}
        exit={{
            opacity: 0,
            translateY: '-20%'
        }}>
            <h3><span>HyperText Markup Language</span></h3>
            <span className="bar-background"><span className="html bar"></span></span>

            <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. </p>
        </motion.div>
    )
}

const CSS_SkillRange = () => {
    return (
        <motion.div className="skills-range"
        initial={{
            opacity: 0,
            translateY: '-20%'
        }}
        animate={{
            opacity: 1,
            translateY: '0'
        }}
        exit={{
            opacity: 0,
            translateY: '-20%'
        }}>
            <h3><span>Cascading Style Sheets</span></h3>
            <span className="bar-background"><span className="css bar"></span></span>

            <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML</p>
        </motion.div>
    )
}

const JS_SkillRange = () => {
    return (
        <motion.div className="skills-range"
        initial={{
            opacity: 0,
            translateY: '-20%'
        }}
        animate={{
            opacity: 1,
            translateY: '0'
        }}
        exit={{
            opacity: 0,
            translateY: '-20%'
        }}>
            <h3><span>JavaScript</span></h3>
            <span className="bar-background"><span className="js bar"></span></span>

            <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
        </motion.div>
    )
}

const REACT_SkillRange = () => {
    return (
        <motion.div className="skills-range"
        initial={{
            opacity: 0,
            translateY: '-20%'
        }}
        animate={{
            opacity: 1,
            translateY: '0'
        }}
        exit={{
            opacity: 0,
            translateY: '-20%'
        }}>
            <h3><span>REACT JS</span></h3>
            <span className="bar-background"><span className="react bar"></span></span>

            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
        </motion.div>
    )
}

const PHOTOSHOP_SkillRange = () => {
    return (
        <motion.div className="skills-range"
        initial={{
            opacity: 0,
            translateY: '-20%'
        }}
        animate={{
            opacity: 1,
            translateY: '0'
        }}
        exit={{
            opacity: 0,
            translateY: '-20%'
        }}>
            <h3><span>ADOBE PHOTOSHOP</span></h3>
            <span className="bar-background"><span className="photoshop bar"></span></span>

            <p>Photoshop is the industry-standard photo editing software, and the go-to application for everything from small retouching changes to mind-bending photo art.</p>
        </motion.div>
    )
}

const ILLUSTRATOR_SkillRange = () => {
    return (
        <motion.div className="skills-range"
        initial={{
            opacity: 0,
            translateY: '-20%'
        }}
        animate={{
            opacity: 1,
            translateY: '0'
        }}
        exit={{
            opacity: 0,
            translateY: '-20%'
        }}>
            <h3><span>ADOBE ILLUSTRATOR</span></h3>
            <span className="bar-background"><span className="illustrator bar"></span></span>

            <p>An illustrator is an artist who specializes in enhancing writing or elucidating concepts by providing a visual representation that corresponds to the content of the associated text or idea.</p>
        </motion.div>
    )
}


export { 
    HTML_SkillRange, 
    CSS_SkillRange, 
    JS_SkillRange, 
    REACT_SkillRange,
    PHOTOSHOP_SkillRange,
    ILLUSTRATOR_SkillRange
}