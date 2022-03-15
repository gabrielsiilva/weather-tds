import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #0F0F0F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 35px;
  `;

export const Description = styled.span`
  color: #8B8B8B;
  font-weight: 100;
  font-size: 29px;
`;

export const EarthIcon = styled.img`
  margin-top: 40px;
  width: 120px;
  height: 120px;
`;

export const SelectCityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 40px;
  column-gap: 20px;
  row-gap: 20px;
`

export const CityName = styled.span`
  color: #fff;
  font-size: 27px;
  font-weight: 100;
  cursor: pointer;
`