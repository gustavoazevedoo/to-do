import styled from 'styled-components';

export const CreateTask = styled.form`
  margin-top: 32px;
  display: flex;
  align-items: center;
  padding: 20px;
  background: hsl(235, 24%, 19%);
  border-radius: 4px;

  button {
    background: transparent;
    border: none;
    font-size: 0;

    img {
      width: 25px;
      height: 25px;
    }
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    margin-left: 16px;
    font-size: 18px;
    color:  hsl(234, 39%, 85%);
    outline: none;
  }
`;

export const TaskList = styled.div`
  margin-top: 32px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: hsl(235, 24%, 19%);
  color:  hsl(233, 14%, 35%);
  font-size: 14px;

  .filters {
    display: flex;
    margin: 0 4px;

    button + button {
      margin-left: 16px;
    }

    button.active {
      color: #3F7EFD;
    }
  }

  button {
    color:  hsl(233, 14%, 35%);
    background: none;
    border: 0;
  }
`;
