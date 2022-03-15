import { useNavigate } from 'react-router-dom';
import earthIcon from '../../assets/icons/earth-icon.png';
import { CityName, Container, Description, EarthIcon, SelectCityContainer, Title } from './styles';


function Home() {
  const navigate = useNavigate();
  const listOfCities = [
    'Dallol',
    'Fairbanks',
    'London',
    'Recife',
    'Vancouver',
    'Yakutsk'
  ]

  return (
    <Container>
      <Title>Weather</Title>
      <Description>select a city</Description>

      <EarthIcon src={earthIcon}></EarthIcon>

      <SelectCityContainer>
        {listOfCities.map((city, index) => (
          <CityName
            key={index}
            onClick={() => navigate('/weather-info', { state: city })}>
              {city}
          </CityName>
        ))}
      </SelectCityContainer>
    </Container>
  );
}

export default Home;
