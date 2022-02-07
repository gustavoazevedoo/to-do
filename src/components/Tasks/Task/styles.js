import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: hsl(235, 24%, 19%);
  border-radius: 4px;
  border-bottom: 1px solid hsl(233, 14%, 35%);

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    & + label:before {
      content: '';
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: transparent;
      border-radius: 50%;
      border: 1px solid hsl(233, 14%, 35%);
    }

    &:hover + label:before {
      background-image: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%))
    }

    // Box focus
    &:focus + label:before {
      border: 1px solid #3F7EFD
    }

    // Box checked
    &:checked + label:before {
      background-image: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%))
    }

    // Checkmark. Could be replaced with an image
    &:checked + label:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 10px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow:
        2px 0 0 white,
        4px 0 0 white,
        4px -2px 0 white,
        4px -4px 0 white,
        4px -6px 0 white,
        4px -8px 0 white;
      transform: rotate(45deg);
    }
  }

    p, s {
    font-size: 18px;
    color:  hsl(234, 39%, 85%);
    margin-left: 16px;
  }

  s {
    color: hsl(233, 14%, 35%);
  }
`;
