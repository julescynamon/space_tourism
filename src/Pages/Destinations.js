import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import './destinations.scss';
import dataJson from '../data.json';

export default function Destinations() {

	const [destinations, setDestinations] = useState(0);

	const data = dataJson.destinations;

	const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 758px)").matches
    )
    
    useEffect(() => {
        window
        .matchMedia("(min-width: 758px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);


	return (
		<section className="destinations">
			<Nav/>
			<div className="destinations__container">
				<h4 className="destinations__title"><span>01</span>Pick your destination</h4>
				<div className="destinations__img">
					<img src={ data[destinations].images.png } alt="current planet" />
				</div>
				<div className={ matches ? "destinations__desktop" : ""} >
					<div className="destinations__planet">
					<ul>
						<li className={ "active" + (destinations[0] ? "active" : '' )} onClick={() => {setDestinations(0)}  }>Moon</li>
						<li className={ destinations[1] ? "active" : '' } onClick={() => {setDestinations(1)}  }>Mars</li>
						<li className={ destinations[2] ? "active" : '' } onClick={() => {setDestinations(2)}  }>Europa</li>
						<li className={ destinations[3] ? "active" : '' } onClick={() => {setDestinations(3)}  }>Titan</li>
					</ul>
					</div>
						<h1 className="destinations__currentPlanet">{ data[destinations].name }</h1>
						<p className="destinations__content">{ data[destinations].description }</p>
						<hr />
					<div className="destinations__mobile">
						<div className="destinations__flex">
							<h4 className="destinations__distance">AVG. DISTANCE</h4>
							<div className="destinations__distancenumber">{ data[destinations].distance }</div>
						</div>
						<div className="destinations__flex">
							<h4 className="destinations__time">EST. TRAVEL TIME</h4>
							<div className="destinations__timenumber">{ data[destinations].travel }</div>
						</div>
						
					</div>
				</div>
				
				
			</div>
		</section>
	)
}
