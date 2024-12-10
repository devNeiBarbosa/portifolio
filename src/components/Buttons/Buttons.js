import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  margin: 15px 0;

  button {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }

  .button-one {
    background: linear-gradient(180deg,
      rgba(41, 166, 164, 1) 0%, 
      rgba(16, 32, 50, 1) 100%);
    
    &:hover {
      background: transparent;
      border: 1px solid #fff;
      transition: 0.2s ease-in-out;
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .button-two {
    background-color: #fff;
    color: #000;

    &:hover {
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
      transition: 0.2s ease-in-out;
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;