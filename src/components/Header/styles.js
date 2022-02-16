import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 10px;
    color: #fff;
  }

  button {
    background: transparent;
    border: none;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;
