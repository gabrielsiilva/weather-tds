import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import cloudIcon from '../../assets/icons/cloud.png';
import rainIcon from '../../assets/icons/rain.png';
import snowIcon from '../../assets/icons/snow.png';
import sunIcon from '../../assets/icons/sun.png';

import Header from '../../components/Header';
import MoreInfoWeather from '../../components/MoreInfoWeather';
import WeatherDetails from '../../components/WeatherDetails';
import { searchCityWeather } from '../../services/api';

import {
  Container,
  Content,
  CurrentTemp,
  CurrentTempIcon,
  Degree,
  Description,
  LoadingContainer,
  LoadingText,
  MaxTemp,
  MinTemp,
  TempContainer,
  Title
} from './styles';


function CityWeather() {
  const location = useLocation();
  const [requestInfo, setRequestInfo] = useState<any>();

  useEffect(() => {
    let cityName = location.state;

    searchCityWeather(cityName).then(response => {
      setRequestInfo(response?.data);
    }).catch(err => console.log(err));
  }, [location.state]);

  const checkWeatherTemperatureInfo = (weatherInfo: string) => {
    if (weatherInfo === 'Snow') return { text: 'snowy', icon: snowIcon };
    else if (weatherInfo === 'Rain') return { text: 'rainy', icon: rainIcon };
    else if (weatherInfo === 'Clouds') return { text: 'cloudy', icon: cloudIcon };
    else return { text: 'sunny', icon: sunIcon };
  }

  return (
    <>
      <Header />
      {!requestInfo ? (
        <LoadingContainer>
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      ) : (
        <Container currentTemp={requestInfo?.weather[0].main}>
          <Content>
            <Title>{requestInfo?.name}</Title>
            <Description>{checkWeatherTemperatureInfo(requestInfo?.weather[0].main).text}</Description>

            <TempContainer>
              <CurrentTemp>{Math.trunc(requestInfo?.main?.temp)}</CurrentTemp>
              <Degree>° C</Degree>
              <MaxTemp>{Math.trunc(requestInfo?.main?.temp_max)}</MaxTemp>
              <MinTemp>{Math.trunc(requestInfo?.main?.temp_min)}</MinTemp>
            </TempContainer>
            <CurrentTempIcon src={checkWeatherTemperatureInfo(requestInfo?.weather[0].main).icon} />

            <WeatherDetails />

            <MoreInfoWeather weatherInfo={requestInfo} />
          </Content>
        </Container>
      )}
    </>
  );
}

export default CityWeather;
