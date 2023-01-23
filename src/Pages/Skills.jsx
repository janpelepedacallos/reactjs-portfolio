import './skills-style.css'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const Skills = () => {
    const [context, setContext] = useState();

    return (
        <motion.div className="skills" 
            initial={{translateX: "-200%"}}
            animate={{translateX: "0"}}
            exit={{translateX: "200%"}}>
        
            <h1><span>S</span>KILLS</h1>

            <div className="skills-content">
                <div className="software-icons">
                    <div className='imgs' onMouseOver={() => {
                        setContext("Html Context")
                    }}>
                        <img src="/src/Assets/html-logo-vector.png" alt="html5-with-wordmark-color-logo-4259B7F24F-seeklogo.com.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext("CSS Context")
                    }}>
                        <img src="/src/Assets/CSS3_logo_and_wordmark.svg.png" alt="CSS3_logo_and_wordmark.svg.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext("Javascript Context")
                    }}>
                        <img src="/src/Assets/JavaScript-Logo - Copy.png" alt="JavaScript-Logo.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext("React Context")
                    }}>
                        <img src="/src/Assets/1631026680-logo-react-native.png" alt="1631026680-logo-react-native.png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext("Photoshop Context")
                    }}>
                        <img src="/src/Assets/adobe-photoshop-cc-2020-icone-designe (1).png" alt="adobe-photoshop-cc-2020-icone-designe (1).png" />
                    </div>
                    <div className="imgs" onMouseOver={() => {
                        setContext("Illustrator Context")
                    }} >
                        <img src="/src/Assets/Adobe_Illustrator_CC_icon.svg.png" alt="Adobe_Illustrator_CC_icon.svg.png" />
                    </div>
                </div>

                <div className="skill-details">
                    <p id="skill_context"></p>
                    {context}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;