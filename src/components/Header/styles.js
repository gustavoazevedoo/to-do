import styled from 'styled-components';

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

h1 {
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 15px;
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
