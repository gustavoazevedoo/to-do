import sun from '../../assets/images/icons/sun.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <h1>todo</h1>
      <button type="button">
        <img src={sun} alt="sun" />
      </button>
    </Container>
  );
}
