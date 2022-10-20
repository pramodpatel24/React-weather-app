import React from "react";
import styled from "styled-components";
const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
const WeatherComponent = (props) => {
  const { current } = props;
  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(current.current.temperature)}°C`}</span>
          {`  |  ${current.current.weather_descriptions}`}
        </Condition>
        <WeatherIcon src={current?.current.weather_icons[0]
        } />
      </WeatherContainer>
      <Location>{`${current.location.name}, ${current?.location?.country}`}</Location>

      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <img style={{ width: 50, height: 50 }} src="https://cdn4.iconfinder.com/data/icons/cloud-based-weather-forecasts/512/weather01-fog-512.png" alt="" />
        <WeatherInfoComponent name={"Visibility"} value={current?.current?.visibility} />
        <img style={{ width: 50, height: 50 }} src="https://icon-library.com/images/humidity-icon/humidity-icon-9.jpg" alt="" />
        <WeatherInfoComponent name={"humidity"} value={current?.current?.humidity} />
        <img style={{ width: 50, height: 50 }} src="https://w7.pngwing.com/pngs/652/594/png-transparent-computer-icons-weather-wind-climate-weather.png" alt="" />
        <WeatherInfoComponent name={"wind"} value={current?.current?.wind_speed} />
        <img style={{ width: 50, height: 50 }} src="https://image.shutterstock.com/shutterstock/photos/1656068398/display_1500/stock-vector--air-pressure-icon-elements-of-weather-icon-set-premium-line-icon-for-web-design-and-app-1656068398.jpg" alt="" />
        <WeatherInfoComponent name={"pressure"} value={current?.current?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;