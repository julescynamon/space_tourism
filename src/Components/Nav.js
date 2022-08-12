import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import burger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';
import logo from '../assets/shared/logo.svg'
import './nav.scss';

export default function Nav() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 758px)").matches
    )
    
    useEffect(() => {
        window
        .matchMedia("(min-width: 758px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const [ showMenu, setShowMenu ] = useState("nav__menu");
    const [ icon, setIcon ] = useState( burger );

    const toggleMenu = () => {
        showMenu === "nav__menu" ? setShowMenu("nav__menu show") : setShowMenu("nav__menu")
        icon === burger ? setIcon(close) : setIcon(burger);
    }

    return (
        <div>
            { matches && (<div className='nav'>
            <div className="nav__logo"><Link to='/'><img src={logo} alt="logo de l'entreprise" /></Link></div>
            <div className="nav__menu">
                <div className="nav__item"><Link to='/'>Home</Link></div>
                <div className="nav__item"><Link to='/destination'>Destination</Link></div>
                <div className="nav__item"> <Link to='/crew'>Crew</Link></div>
                <div className="nav__item"><Link to='/technology'>Technologie</Link></div>
            </div>            
        </div>)}
        { !matches && (<div className='nav'>
            <div className="nav__logo"><Link to='/'><img src={logo} alt="logo de l'entreprise" /></Link></div>
            <div className="nav__menu-burger" onClick={toggleMenu}>
                <img src={icon} alt="" />
            </div>
            <div className={showMenu}>
                <div className="nav__item"><Link to='/'><span>00</span>Home</Link></div>
                <div className="nav__item"><Link to='/destination'><span>01</span>Destination</Link></div>
                <div className="nav__item"> <Link to='/crew'><span>02</span>Crew</Link></div>
                <div className="nav__item"><Link to='/technology'><span>03</span>Technologie</Link></div>
            </div>            
        </div>)}
        </div>
        
    )
}
