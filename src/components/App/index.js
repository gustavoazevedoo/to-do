import GlobalStyle from '../../assets/styles/global';
import banner from '../../assets/images/bg-desktop-dark.jpg';
import { Banner, Container } from './styles';
import Tasks from '../Tasks';
import { Header } from '../Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner banner={banner} />
      <Container>
        <Header />
        <Tasks />
      </Container>
    </>
  );
}

export default App;
