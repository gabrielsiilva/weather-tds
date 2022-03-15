import cloudyIcon from '../../assets/icons/cloud-sun.svg';

import {
  Box,
  WeatherDetail,
  WeatherDetailIcon,
  WeatherDetailTemp,
  WeatherDetailText
} from './styles';

function WeatherDetails() {

  return (
    <Box>
      <WeatherDetail>
        <WeatherDetailText>dawn</WeatherDetailText>
        <WeatherDetailIcon src={cloudyIcon} />
        <WeatherDetailTemp>-8 °C</WeatherDetailTemp>
      </WeatherDetail>

      <WeatherDetail>
        <WeatherDetailText>morning</WeatherDetailText>
        <WeatherDetailIcon src={cloudyIcon} />
        <WeatherDetailTemp>-5 °C</WeatherDetailTemp>
      </WeatherDetail>

      <WeatherDetail>
        <WeatherDetailText>afternoon</WeatherDetailText>
        <WeatherDetailIcon src={cloudyIcon} />
        <WeatherDetailTemp>-2 °C</WeatherDetailTemp>
      </WeatherDetail>

      <WeatherDetail>
        <WeatherDetailText>night</WeatherDetailText>
        <WeatherDetailIcon src={cloudyIcon} />
        <WeatherDetailTemp>-7 °C</WeatherDetailTemp>
      </WeatherDetail>
    </Box>
  );
}

export default WeatherDetails;
