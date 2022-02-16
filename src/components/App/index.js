import GlobalStyle from '../../assets/styles/global';
import desktopBanner from '../../assets/images/bg-desktop-dark.jpg';
import mobileBanner from '../../assets/images/bg-mobile-dark.jpg';
import { Banner, Container } from './styles';
import Tasks from '../Tasks';
import { Header } from '../Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner banner={{ desktopBanner, mobileBanner }} />
      <Container>
        <Header />
        <Tasks />
      </Container>
    </>
  );
}

export default App;
