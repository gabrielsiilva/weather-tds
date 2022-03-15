import styled from 'styled-components';

export const LoadingText = styled.span`
  color: #fff;
  align: center;
  justify-content: center;
  font-size: 30px;
`;

export const LoadingContainer = styled.div`
  background-color: #0F0F0F;

  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Container = styled('div') <{ currentTemp: string }>`
  width: 100%;
  height: 100vh;
  
  /* background  */
  background: ${props => {
    if (props.currentTemp === 'Snow') return 'linear-gradient(to bottom, #E0E0E0 30%, #A8A8A8 70%)';
    else if (props.currentTemp === 'Rain') return 'linear-gradient(to bottom, #616978 30%, #404757 70%)';
    else return 'linear-gradient(to bottom, #57CBDB 30%, #3BA1B5 70%)';
  }};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10%;
`;

export const Title = styled.span`
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 35px;
  `;

export const Description = styled.span`
  color: #fff;
  font-weight: 100;
  font-size: 29px;
  letter-spacing: 2px;
`;

export const TempContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 25px;
`

export const CurrentTemp = styled.span`
  color: #fff;
  font-size: 100px;
  grid-area: 3 span;
`;

export const TempDetails = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  color: #fff;
  align-items: end;
`;

export const Degree = styled(TempDetails)`
  font-size: 28px;
`;

export const MaxTemp = styled(TempDetails)`
  align-items: end;
`;

export const MinTemp = styled(TempDetails)`
  align-items: start;
`;

export const CurrentTempIcon = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 40px;
  color: #fff;
  stroke: #fff;
  fill: #fff;
`;