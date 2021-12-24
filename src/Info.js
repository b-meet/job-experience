import React from "react";

const Info = ({ details }) => {
	const { company, title, dates, duties } = details;
	return (
		<section className='info-container'>
			<h2 className='job-title'>{title}</h2>
			<h4 className='company-name'>{company}</h4>
			<br></br>
			<time className='time-period'>{dates}</time>
			<ul className='duties'>
				{duties.map((duty, index) => (
					<li key={index}>{duty}</li>
				))}
			</ul>
		</section>
	);
};

export default Info;
