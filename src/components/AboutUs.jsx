import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <motion.h1 
                    className="about_title"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.5 } }}
                >
                    Elevating your app <span>business.</span>
                </motion.h1>
                <motion.h3 
                    className="about_subtitle"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.75, scale: 1, transition: { type: "ease", delay: 0.2, duration: 0.5 } }}
                >
                    Focusing on success only to boost your traction.
                </motion.h3>

                <div className="user">
                    <motion.div 
                        className="user_props"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.7 } }}
                        viewport={{ once: true }}
                    >
                        <h2 className="user_title">user acquisition</h2>
                        <div className="user_prop">
                            <img src="./survey.svg" alt="icon" />
                            <div className="prop_txt">
                                <h3 className="prop_title">
                                    Strategic Targeting
                                </h3>
                                <h4 className="prop_desc">
                                    Leverage precise audience targeting to
                                    attract the most relevant users to your
                                    platform, ensuring higher engagement and
                                    conversion rates.
                                </h4>
                            </div>
                        </div>
                        <div className="user_prop">
                            <img src="./campaign.svg" alt="icon" />
                            <div className="prop_txt">
                                <h3 className="prop_title">
                                    Optimized Campaigns
                                </h3>
                                <h4 className="prop_desc">
                                    Utilize data-driven insights to create and
                                    refine marketing campaigns that maximize
                                    reach and effectiveness, driving consistent
                                    user growth.
                                </h4>
                            </div>
                        </div>
                        <div className="user_prop">
                            <img src="./support.svg" alt="icon" />
                            <div className="prop_txt">
                                <h3 className="prop_title">
                                    Seamless Onboarding
                                </h3>
                                <h4 className="prop_desc">
                                    Enhance user experience with a smooth
                                    onboarding process, ensuring that new users
                                    quickly find value and become active
                                    participants in your platform.
                                </h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="user_image"
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="./acquisition-illustration.svg"
                            alt="userAcuisition"
                        />
                    </motion.div>
                </div>

                <div className="app">
                    <motion.div 
                        className="app_props"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.7 } }}
                        viewport={{ once: true }}
                    >
                        <h2 className="app_title">app monetization</h2>
                        <div className="app_prop">
                            <img src="./diverse.svg" alt="icon" />
                            <div className="prop_txt">
                                <h3 className="prop_title">
                                    Diverse Revenue Streams
                                </h3>
                                <h4 className="prop_desc">
                                    Implement multiple monetization strategies,
                                    including in-app purchases, subscriptions,
                                    and ads, to maximize your app&apos;s earning
                                    potential.
                                </h4>
                            </div>
                        </div>
                        <div className="app_prop">
                            <img src="./person.svg" alt="icon" />
                            <div className="prop_txt">
                                <h3 className="prop_title">User-Centric Ads</h3>
                                <h4 className="prop_desc">
                                    Integrate non-intrusive, targeted ads that
                                    align with user preferences, boosting ad
                                    revenue without compromising user
                                    experience.
                                </h4>
                            </div>
                        </div>
                        <div className="app_prop">
                            <img src="./support.svg" alt="icon" />
                            <div className="prop_txt">
                                <h3 className="prop_title">
                                    Performance Analytics
                                </h3>
                                <h4 className="prop_desc">
                                    Utilize advanced analytics to track
                                    monetization performance, allowing for
                                    continuous optimization and higher returns
                                    on investment.
                                </h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="app_image"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0, transition: { type: "ease", delay: 0.3, duration: 0.5, } }}
                        viewport={{ once: true }}
                    >
                        <img src="./monetization-illustration.svg" alt="app" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
