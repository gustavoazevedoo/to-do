import styled from 'styled-components';

export const Banner = styled.div`
  background-image: url(${({ banner }) => banner.desktopBanner});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;

  @media(max-width: 575.98px) {
    background-image: url(${({ banner }) => banner.mobileBanner});
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 565px;
  margin: -220px auto 30px;

  @media(max-width: 575.98px) {
    margin: -240px auto 30px;
    padding: 0 24px;
  }
`;
