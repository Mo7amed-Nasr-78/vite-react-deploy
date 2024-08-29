import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";



const Header = () => {

    const [ scrollY, setScrollY ] = useState();
    const [ visibe, setVisile ] = useState(false);
    const [ listVisible, setListVisible ] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        const handleResize = () => {
            console.log(document.querySelector(".container").clientWidth);
            if (document.querySelector(".container").clientWidth <= 768) {
                setVisile(true);
            } else {
                setVisile(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);


        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        }
    }, [scrollY]);

    const handleClick = () => {
        if (!listVisible) {
            setListVisible(true);
        } else {
            setListVisible(false);
        }
    }


    return (
        <motion.header 
            className={`${ scrollY > 0? 'scroll': '' }`} 
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 1, damping: 5 } }}
        >
            <div className="container">
                <div className="head">
                    <a href="#home">
                        <img src="./logo.svg" alt="logo" className="logo"/>
                    </a>
                    <ul className={`nav_list ${ visibe? "phone": "" } ${ listVisible? "show": "" }`}>
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

                <div className={`head ${ visibe? "phone": "" }`}>
                    <a href="#" className="contact">
                        contact us
                    </a>
                    <button className="sign_in">
                        <img src="./bx-log-in.svg" alt="logIn" />
                        <span>sign in</span>
                    </button>
                </div>
                <div className={`icons ${ visibe? "show": "" }`}>
                    <CgProfile />
                    <FaBars onClick={handleClick}/>
                </div>
            </div>
        </motion.header>
    )
}

export default Header;