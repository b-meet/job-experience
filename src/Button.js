import React from "react";

const Button = ({ handleChange, companies }) => {
	return (
		<section className='btn-container'>
			{companies.map((company, index) => {
				return (
					<button
						className={"company-btn"}
						onClick={() => handleChange(index)}
						key={company.id}
					>
						{company.company}
					</button>
				);
			})}
		</section>
	);
};

export default Button;

//companies are just the whole data as details
//company is a individual element in the array
