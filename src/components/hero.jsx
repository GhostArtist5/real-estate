import "./hero.css";
import heroImg from "../assets/3d.webp"
import { FaArrowDown } from "react-icons/fa";

function Hero() {
    return (
        <div className="hero">
            <div className="img-container">
                <img src={heroImg} alt="Hero" />
            </div>
            <p>Building Your Future, One Property at a Time</p>
            <button className="down-arrow">
                <FaArrowDown size={30} />
            </button>
        </div>
    
    );
}

export default Hero;


