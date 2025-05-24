import React, {useState} from "react";
import logo from '../assets/images/logo.png'
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import {Link} from 'react-router-dom';
import {
    preloadContact,
    preloadLocations,
    preloadService, 
    preloadQuote
} from '../routes'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownActive, setIsDropDownActive] = useState(false)
    const toggleMenu = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        // Close dropdowns if menu is being closed
        if (!newState) {
            setIsDropDownMenuOpen(false);
            setIsServiceDropDownMenuOpen(false);
            setHoveredLink(null);
        }
    }
    const toggleDropDownMenu = () => {
        setIsDropDownMenuOpen((prev) => {
          if (!prev) setIsServiceDropDownMenuOpen(false); // close the other menu if opening
          return !prev;
        });
      };

    return(
        <header>
            <nav>
                <Link to="/"> <img src={logo} alt="" /></Link>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <div className="services-link-container">
                        <div className="services-link" onClick={toggleDropDownMenu}>
                            <Link to="/services">
                                <p>Services</p>
                            </Link>
                             {isDropDownActive ? <RxCaretUp /> : <RxCaretDown />}
                        </div>
                        <div className={`services-link-dropdown ${isDropDownActive ? 'active' : ''}`}>
                            <Link to="/services/lawn-maintenance">
                                <p>Lawn Maintenance</p>
                            </Link>
                            <Link to="/services/landscaping">
                                <p>Landscaping</p>
                            </Link>
                        </div>
                    </div>
                    <Link to="/contact" onMouseEnter={preloadContact} onTouchStart={preloadContact}><p>Contact</p></Link>
                    <Link to="/locations" onMouseEnter={preloadLocations} onTouchStart={preloadLocations}><p>Locations</p></Link>
                    <Link to="/quote" onMouseEnter={preloadQuote} onTouchStart={preloadQuote}><p>Get Quote</p></Link>
                </div>
                <div className="hamIcon" onClick={toggleMenu}>
                    {isOpen ? <MdClose /> : <FaBars />}
                </div>
            </nav>
        </header>
    )
}
export default Header