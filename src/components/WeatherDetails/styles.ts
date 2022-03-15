import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 50px;
`;

export const WeatherDetail = styled.div`
  display: grid;
  justify-items: center;
  color: #fff;
`;

export const WeatherDetailText = styled.span`
  color: #fff;
  letter-spacing: 1px;
`;

export const WeatherDetailIcon = styled.img`
  width: 40px;
  height: 40px;
  color: #fff;
`;

export const WeatherDetailTemp = styled.span`
  letter-spacing: 1px;
`;