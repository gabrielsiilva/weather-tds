import { useNavigate } from 'react-router-dom';
import { Container, BackIcon } from './styles';
import arrowBack from '../../assets/icons/arrow-back.svg';

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackIcon
        src={arrowBack}
        onClick={() => navigate("/")}
      />
    </Container>
  );
}

export default Header;
