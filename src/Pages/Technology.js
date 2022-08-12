import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import dataJson from '../data.json';
import './technology.scss';

export default function Technology() {

	const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 758px)").matches,
    )

    
    useEffect(() => {
        window
        .matchMedia("(min-width: 758px)")
        .addEventListener('change', e => setMatches( e.matches ));

    }, []);

	const [tech, setTech] = useState(0);

	const data = dataJson.technology;

	return (
		<section className="technology">
			<Nav/>
			<div className="technology__container">
				<h4 className="technology__title">
					<span>03</span>SPACE LAUNCH 101
				</h4>
				<div className="technology__img">
					{ matches && (<img src={ data[tech].images.landscape } alt="technology" />)}
					{ !matches && (<img src={ data[tech].images.portrait } alt="technology" />)}
				</div>
				<div className="technology__button">
					<button className={"technology__button--item" + (tech[0] ? "active-btn" : '' )} onClick={() => {setTech(0)}  }>1</button>
					<button className={"technology__button--item"  + (tech[1] ? "active-btn" : '') } onClick={() => {setTech(1)}  }>2</button>
					<button className={"technology__button--item" + (tech[2] ? "active-btn" : '') } onClick={() => {setTech(2)}  }>3</button>
				</div>
				<div className={ matches ? "technology__desktop" : ""}>
					<h4 className="technology__attract">THE TERMINOLOGY ...</h4>
					<h4 className="technology__info">{ data[tech].name }</h4>
					<p className="technology__description">{ data[tech].description }</p>
				</div>
			</div>
		</section>
	)
}
