import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [City, updateCity] = useState();
  const [current, updateCurrent] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `http://api.weatherstack.com/current?access_key=fc826fc7f2e1a934b37cbf0e34657c83&query=${City}`,
    );
    updateCurrent(response.data);
    console.log(response);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {City && current ? (
        <WeatherComponent current={current} City={City} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;