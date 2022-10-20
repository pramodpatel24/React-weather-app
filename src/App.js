import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/react-weather-app/icons/sunny.svg",
  "01n": "/react-weather-app/icons/night.svg",
  "02d": "/react-weather-app/icons/day.svg",
  "02n": "/react-weather-app/icons/cloudy-night.svg",
  "03d": "/react-weather-app/icons/cloudy.svg",
  "03n": "/react-weather-app/icons/cloudy.svg",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

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
// const CloseButton = styled.span`
//   padding: 2px 3px;
//   background-color: black;
//   border-radius: 50%;
//   color: white;
//   position: absolute;
// `;

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