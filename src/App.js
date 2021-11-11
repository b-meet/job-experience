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

  async function getData() {
    const resp = await fetch(url);
    if (resp.status >= 200 && resp.status <= 299) {
      let data = await resp.json();
      setIsLoading(false);
      setDetails(data);
    } else {
      setIsError(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // displayed till api arrive

  if (isLoading) {
    return <h1 className='main-heading'>Loading...</h1>;
  }

  //displayed if api fails to arrive

  if (isError) {
    return (
      <section className='heading-container'>
        <h1 className='main-heading'> 404 Error </h1>
        <p className='error-desc'>
          could not find the page you are looking for
        </p>
        <ul>
          <li>Try reloding the page</li>
          <li>Check your connection</li>
          <li>Report us on github</li>
        </ul>
      </section>
    );
  }

  //displayed if everything in fetching goes well

  return (
    <>
      <section className='heading-container'>
        <h1 className='main-heading'>Job Requirements</h1>
      </section>
      <Button />
      <Info index={index} details={details} />
    </>
  );
}

export default App;
