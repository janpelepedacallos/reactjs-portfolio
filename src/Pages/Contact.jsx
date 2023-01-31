import About from './About';
import { motion } from 'framer-motion'
import './contact-style.css';
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <motion.div className="email"
            
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
            <div className="send-email">
                <h2>Send me a <span>Message</span> <img src="/src/Assets/icons/chat_message_sent_40px.png" alt="chat_message_sent_40px.png" /></h2>

                <form action="#">
                    <div className="sender-info">
                        <div className="sender-name">
                            <label htmlFor='name'>Name</label>
                            <input type="text" id='name' placeholder="Enter your name..." required />
                        </div>

                        <div className="sender-email">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id='email' placeholder="example@gmail.com" required />
                        </div>
                    </div>

                    <div className="sender-message">
                        <label htmlFor='message'>Message</label>
                        <textarea name="messageTxt" id='message' cols="30" rows="10" placeholder="Enter your message..." required ></textarea>
                    </div>
                
                    <div className="form-buttons">
                        <button className="sendBtn" type='submit'>Send <img src="/src/Assets/icons/forward_arrow_40px.png" alt="forward_arrow_40px.png" /></button>
                        <button className="clearBtn" type='reset'>Clear</button>
                    </div>
                </form>
            </div>

            <div className="email-details">
                <h2>Email me.</h2>
                <h1><span>Let's talk. Tell me about your project.</span></h1>
                <p>Let's <span>create someting</span> together 👊</p>

                <div className="email-link">
                    <div className="email-icon">
                        <img src="/src/Assets/icons/Gmail Logo_30px.png" alt="Gmail Logo_30px.png" />
                    </div>

                    <div className="gmail-acc">
                        <h4>Mail me at</h4>
                        <a href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJvnJCVWmmHBPztHpFWZTpkFsbhSqhnhzglMDJKQtQtKJPmwnSlRrNTlmKLmSjRGZjWSVZg" target={'_blank'}>jphillipdacallos@gmail.com</a>
                    </div>
                </div>
            </div>
            
            {/* <About /> */}
        </motion.div>

    )
}

export default Contact;