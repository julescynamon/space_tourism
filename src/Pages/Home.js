import React from 'react';
import './home.scss';
import Nav from "../Components/Nav";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="home">
            <Nav/>
            <div className="home__container">
                <div className="home__desktop">
                    <h5 className="home__title"> SO, YOU WANT TO TRAVEL TO</h5>
                    <h1 className="home__space">SPACE</h1>
                    <p className="home__content">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home__desktopbutton">
                    <button className="home__button">
                    <Link to='/destination'>Explore</Link>
                    </button>
                </div>
                
            </div>
        </section>
    )
}
