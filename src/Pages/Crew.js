import React, { useState } from 'react';
import Nav from '../Components/Nav';
import './crew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import dataJson from '../data.json';

export default function Crew() {

	const [crew, setCrew] = useState(0);

	const data = dataJson.crew;


	return (
		<section className="crew">
			<Nav/>
			<div className="crew__container">
				<h4 className="crew__title"><span>01</span>MEET YOUR CREW</h4>
				<div className="crew__img">
					<img src={ data[crew].images.png } alt="current crew" />
				</div>
				<hr />
				<div className="crew__choice">
					<FontAwesomeIcon icon={ faCircle } className={ crew[0] ? "active-crew" : '' } onClick={() => {setCrew(0)}  }/>
					<FontAwesomeIcon icon={ faCircle } className={ crew[1] ? "active-crew" : '' } onClick={() => {setCrew(1)}  }/>
					<FontAwesomeIcon icon={ faCircle } className={ crew[2] ? "active-crew" : '' } onClick={() => {setCrew(2)}  }/>
					<FontAwesomeIcon icon={ faCircle } className={ crew[3] ? "active-crew" : '' } onClick={() => {setCrew(3)}  }/>
				</div>
				<div className="crew__mobile">
					<h4 className="crew__pilot">
					{ data[crew].role }
				</h4>
				<h4 className="crew__name">
					{data[crew].name}
				</h4>
				<p className="crew__description">
					{data[crew].bio}
				</p>
				</div>
				
			</div>
		</section>
	)
}
