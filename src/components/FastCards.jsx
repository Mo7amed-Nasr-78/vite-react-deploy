import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

const FastCards = () => {
    return (
        <section className="fast_cards">
            <div className="container">
                <motion.div 
                    className="card"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.5 } }}
                >
                    <h2 className="title">developer</h2>
                    <p className="desc">Discover innovative tools and resources tailored for developers to streamline your workflow and bring your creative visions to life.</p>
                    <button className="card_btn">
                        documentation
                        <BiChevronDown />
                    </button>
                </motion.div>
                <motion.div 
                    className="card"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { type: "ease", duration: 0.7 } }}
                >
                    <h2 className="title">brands</h2>
                    <p className="desc">Empower your brand with solutions that enhance visibility, engagement, and loyalty across your target audience.</p>
                    <button className="card_btn">
                        launch campaign
                        <BiChevronDown />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default FastCards;