import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";



const Header = () => {

    const [ scrollY, setScrollY ] = useState();
    const [ visibe, setVisile ] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);

        }
    }, [scrollY]);


    const handleClick = () => {
        if (!visibe) {
            setVisile(true);
        } else {
            setVisile(false);
        }
    }

    return (
        <motion.header 
            className={`${ scrollY > 0? 'scroll': '' }`} 
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1, damping: 5 } }}
        >
            <div className="container">
                <div className="head one">
                    <a href="#home">
                        <img src="./logo.svg" alt="logo" className="logo"/>
                    </a>
                    <ul className={`nav_list ${ visibe? "show": "" }`}>
                        <li className="nav_item">
                            <a href="" className="nav_link">
                                user Acquisition
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                Monetization 
                                <BiChevronDown />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link">
                                resources
                                <BiChevronDown />
                            </a>
                        </li>
                        <li className="nav_item phone">
                            <a href="#" className="nav_link">
                                contact us
                                <BiChevronDown />
                            </a>
                        </li>
                        <li className="nav_item phone">
                            <a href="#" className="nav_link">
                                sign in
                                <BiChevronDown/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="head two">
                    <a href="#" className="contact">
                        contact us
                    </a>
                    <button className="sign_in">
                        <img src="./bx-log-in.svg" alt="logIn" />
                        <span>sign in</span>
                    </button>
                </div>
                <div className="icons">
                    <CgProfile />
                    <FaBars onClick={handleClick}/>
                </div>
            </div>
        </motion.header>
    )
}

export default Header;