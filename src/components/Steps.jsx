import { motion } from "framer-motion";

const Steps = () => {
    return (
        <section className="steps">
            <div className="container">
                <motion.h1 
                    className="steps_title"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.5 } }}
                >
                    Driving revenue with <span>performance</span>
                </motion.h1>
                <motion.h3 
                    className="steps_subtitle"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.75, scale: 1, transition: { type: "ease", delay: 0.2, duration: 0.5 } }}
                >
                    We showcase your brand offers to targeted audiences <br />{" "}
                    through relevant apps across the globe.
                </motion.h3>
                <div className="steps_cards">
                    <div className="steps_card">
                        <motion.div 
                            className="card_txt"
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        >
                            <div className="step_num">step 1</div>
                            <h2 className="card_title">attract user</h2>
                            <p className="card_desc">
                                Engage your target audience with tailored
                                strategies that draw users to your platform,
                                ensuring a strong first impression and sustained
                                interest.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="card_img"
                            initial={{ opacity: 0, x: "100%" }}
                            whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        >
                            <img src="./apps-illustration.svg" alt="image" />
                        </motion.div>
                    </div>
                    <div className="steps_card">
                        <motion.div 
                            className="card_txt"
                            initial={{ opacity: 0, x: "100%" }}
                            whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        >
                            <div className="step_num">step 2</div>
                            <h2 className="card_title">convert user</h2>
                            <p className="card_desc">
                                Transform visitors into loyal customers through
                                seamless onboarding and personalized experiences
                                that encourage long-term engagement.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="card_img"
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        >
                            <img src="./step-2.png" alt="image" />
                        </motion.div>
                    </div>
                    <div className="steps_card">
                        <motion.div 
                            className="card_txt"
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        >
                            <div className="step_num">step 3</div>
                            <h2 className="card_title">seamless continously</h2>
                            <p className="card_desc">
                                Grow your user base efficiently by leveraging
                                data-driven insights and scalable solutions that
                                adapt to your evolving needs.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="card_img"
                            initial={{ opacity: 0, x: "100%" }}
                            whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        >
                            <img src="./step-3.png" alt="image" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
