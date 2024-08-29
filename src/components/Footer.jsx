import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img src="./logo.svg" alt="logo" />
                <div className="foot_cont">
                    <div className="foot_desc">
                        <p>
                            Empower your digital strategy with cutting-edge
                            tools and insights designed to elevate your brand
                            and increase your impact. Start optimizing today!
                        </p>
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
                    <div className="foot_links">
                        <div className="links_list">
                            <h3 className="list_title">company</h3>
                            <ul className="list">
                                <a href="#" className="list_item">
                                    <li>about</li>
                                </a>
                                <a href="#" className="list_item">
                                    <li>contact</li>
                                </a>
                                <a href="#" className="list_item">
                                    <li>terms and conditions</li>
                                </a>
                            </ul>
                        </div>
                        <div className="links_list">
                            <h3 className="list_title">quick licks</h3>
                            <ul className="list">
                                <a href="#" className="list_item">
                                    <li>dashboard</li>
                                </a>
                                <a href="#" className="list_item">
                                    <li>sign in</li>
                                </a>
                                <a href="#" className="list_item">
                                    <li>sign up</li>
                                </a>
                            </ul>
                        </div>
                        <div className="links_list">
                            <h3 className="list_title">help & support</h3>
                            <ul className="list">
                                <a href="#" className="list_item">
                                    <li>support</li>
                                </a>
                                <a href="#" className="list_item">
                                    <li>privacy policy</li>
                                </a>
                                <a href="#" className="list_item">
                                    <li>documentation</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <span className="foot_line"></span>
                <div className="foot_rights">
                    <span>© 2023. All rights reserved.</span>
                    <div className="methods">
                        <img src="./methods.png" alt="payments" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
