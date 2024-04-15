import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const getWeatherOfTheDay = () => {
    return "sunny";
};

function Home() {
    const weather = useLoaderData("app");

    return (
    <>
        <h1>Hello, yann solo !</h1>
        <p>Today is a {weather} day</p>
    </>
    );
  }
  
  export default Home;