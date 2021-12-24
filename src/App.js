import React from "react";
import { useEffect, useState } from "react";
import Button from "./Button";
import Info from "./Info";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [details, setDetails] = useState([]); // api data in form of array consisting objects
	const [isLoading, setIsLoading] = useState(true); //To display losing on screen till the api arrives
	const [isError, setIsError] = useState(false); // To display error if api fails to arrive
	const [index, setIndex] = useState(0); // it defines the index of array arriving through api

	//fetching the api

	const getData = async () => {
		const resp = await fetch(url);
		if (resp.status >= 200 && resp.status <= 299) {
			let data = await resp.json();
			setIsLoading(false);
			setDetails(data);
		} else {
			setIsError(true);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	// displayed till api arrive

	if (isLoading) {
		return <h1 className='loading'>Loading...</h1>;
	}

	//displayed if api fails to arrive

	if (isError) {
		return <h1 className='loading'>Error...</h1>;
	}

	//displayed if everything in fetching goes well

	return (
		<>
			<section className='heading-container'>
				<h1>Job Experience</h1>
			</section>
			<section className='content-container'>
				{details.length > 0 && <Button companies={details} />}
				{
					details.length > 0 && (
						<Info details={details[index]} />
					) /*to stop rendering before data arrives*/
				}
			</section>
			<button className='btn'>more info</button>
		</>
	);
}

export default App;
