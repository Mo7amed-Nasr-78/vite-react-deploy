import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {

    return (
        <section className="home" id="home">
            <div className="container">
                <div className="home_txt">
                    <motion.h1 
                        className="maintitle"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{opacity: 1, x: 0, transition: { type: "ease", duration: 0.3 } }}
                    >
                        Unlock the Full Potential of Your Digital Presence
                    </motion.h1>
                    <motion.h2 
                        className="subtitle"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: "ease", duration: 0.5 } }}
                    >
                        Leverage innovative solutions to attract, engage, and
                        retain your audience, driving growth and maximizing
                        revenue for your business.
                    </motion.h2>
                    <motion.button 
                        className="main_btn"
                        initial={{ opacity: 0, x: "-100%", scale: 1 }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: "ease", duration: 0.7 } }}
                        whileHover={{ scale: 0.95, transition: { type: "spring", duration: 0.5, mass: 0.5, damping: 8 } }}
                    >
                        get started
                    </motion.button>
                    <div className="icons">
                        <a href="#">
                            <div className="icon">
                                <FaXTwitter />
                            </div>
                        </a>
                        <a href="#">
                            <div className="icon">
                                <FaInstagram />
                            </div>
                        </a>
                        <a href="#">
                            <div className="icon">
                                <FaLinkedinIn />
                            </div>
                        </a>
                    </div>
                </div>
                <motion.div 
                    className="home_img"
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: 0, transition: { type: "spring", delay: 0.5, duration: 0.5, damping: 8, mass: 0.5 } }}
                >
                    <img src="./landing-image.svg" alt="image" />
                </motion.div>
                <div className="props">
                    <motion.div 
                        className="prop"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.5 } }}
                    >
                        <img src="./check.svg" alt="icon" />
                        <span>First-party data for accurate AI matching.</span>
                    </motion.div>
                    <motion.div 
                        className="prop"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: "ease", delay: 0.2, duration: 0.5 } }}
                    >
                        <img src="./check.svg" alt="icon" />
                        <span>
                            Anti-fraud measures and transparent reporting.
                        </span>
                    </motion.div>
                    <motion.div 
                        className="prop"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: "ease", delay: 0.4, duration: 0.5 } }}
                    >
                        <img src="./check.svg" alt="icon" />
                        <span>Worldwide users from brand-safe apps.</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
