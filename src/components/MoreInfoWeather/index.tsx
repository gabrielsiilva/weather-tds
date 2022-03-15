import moment from 'moment';
import {
  MoreInfoBox,
  TempDetails,
  TempInfo,
  TempText
} from './styles';

export const MoreInfoWeather = ({ weatherInfo }: any) => {

  return (
    <MoreInfoBox>
      <TempInfo>
        <TempText>wind speed</TempText>
        <TempDetails>{weatherInfo?.wind?.speed} m/s</TempDetails>
      </TempInfo>

      <TempInfo>
        <TempText>sunrise</TempText>
        <TempDetails>{moment(weatherInfo?.sys?.sunrise).format("hh:mm A")}</TempDetails>
      </TempInfo>

      <TempInfo>
        <TempText>sunset</TempText>
        <TempDetails>{moment(weatherInfo?.sys?.sunset).format('hh:mm A')}</TempDetails>
      </TempInfo>

      <TempInfo>
        <TempText>humidity</TempText>
        <TempDetails>{weatherInfo?.main?.humidity}%</TempDetails>
      </TempInfo>
    </MoreInfoBox>
  );
}

export default MoreInfoWeather;
