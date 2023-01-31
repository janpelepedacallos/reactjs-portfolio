import './skills-style.css'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
    HTML_SkillRange,
    CSS_SkillRange,
    JS_SkillRange,
    REACT_SkillRange,
    PHOTOSHOP_SkillRange,
    ILLUSTRATOR_SkillRange
} from './SkillsRange'

const Skills = () => {
    const [context, setContext] = useState();

    return (
        <motion.div className="skills" 
            
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

            <div className="skills-content">
                <div className="software-icons">
                    <div className='imgs' onMouseOver={() => {
                        setContext( <HTML_SkillRange /> )
                    }}>
                        <img src="/src/Assets/html-logo-vector.png" alt="html5-with-wordmark-color-logo-4259B7F24F-seeklogo.com.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext( <CSS_SkillRange /> )
                    }}>
                        <img src="/src/Assets/CSS3_logo_and_wordmark.svg.png" alt="CSS3_logo_and_wordmark.svg.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext( <JS_SkillRange /> )
                    }}>
                        <img src="/src/Assets/JavaScript-Logo - Copy.png" alt="JavaScript-Logo.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext( <REACT_SkillRange /> )
                    }}>
                        <img src="/src/Assets/1631026680-logo-react-native.png" alt="1631026680-logo-react-native.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext( <PHOTOSHOP_SkillRange /> )
                    }}>
                        <img src="/src/Assets/adobe-photoshop-cc-2020-icone-designe (1).png" alt="adobe-photoshop-cc-2020-icone-designe (1).png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext( <ILLUSTRATOR_SkillRange /> )
                    }} >
                        <img src="/src/Assets/Adobe_Illustrator_CC_icon.svg.png" alt="Adobe_Illustrator_CC_icon.svg.png" />
                    </div>
                </div>

                <div className="skill-details">
                    <div className="skill-context">
                        <h2>My Professional <span>Skills.</span></h2>
                        <p>I'm a <span>Full-stack Developer</span> based in Philippines. To ensure business growth, I am here with expertise in Web Development as well as in Graphic Designs. 
                        I'm finding uniqe solutions to complex problems and I'm doing it all while doing various tasks all at once.</p>
                    </div>

                    {context}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;