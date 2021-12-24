import React from "react";

const Button = ({ companies }) => {
	return (
		<section className='btn-container'>
			{companies.map((company, index) => {
				return (
					<button className='company-btn' key={company.id}>
						{company.company}
					</button>
				);
			})}
		</section>
	);
};

export default Button;
