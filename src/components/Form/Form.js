import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 100px;

  .contact-local {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid #29a6a4;
    border-radius: 20px;
    background: linear-gradient(180deg,
        rgba(41, 166, 164, 0.2) 0%, 
        rgba(16, 32, 50, 0.3) 100%);

    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.animate-jump {
      opacity: 1;
      transform: scale(1);
    }
  }

  .text-area{
    display: flex;
    justify-content: center;
    align-items: center;

    textarea {
      outline: none;
      border: 2px solid #29a6a4;
      border-radius: 10px;
      background-color: transparent;
      color: #fff;
      font-size: 14px;
      line-height: 20px;

      width: 500px;
      height: 227px;
      margin-top: 15px;
      padding: 5px 10px 5px 10px;

      resize: none;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
        margin: 5px;
      }
    }
  }

  .submit-button {
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.animate-jump {
      opacity: 1;
      transform: scale(1);
    }

    p {
      opacity: 0.5;
      font-size: 14px;
      text-align: center;
    }
  }

  .to-send {
    width: 290px;
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    padding-top: 100px;

    .contact-local {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    .text-area {
      width: 300px;
      
      textarea {
        height: 130px;
      }
    }
  }
`;

export const Label = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  margin: 10px 0 0 10px;

  span {
      color: red;
      font-size: 16px;    
  }

  @media screen and (max-width: 540px) {
    margin: 0;
  }
`;

export const Input = styled.input`
  border: 2px solid #29a6a4;
  border-radius: 10px;
  background-color: transparent;
  outline: none;

  width: 300px;
  height: 40px;

  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 14px;
  line-height: 28px;
  color: #fff;

  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0
  }

  @media screen and (max-width: 540px) {
    margin: 0 0 10px 0;
  }
`;

export const Title = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: translateX(-100%);
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  opacity: 0;
  z-index: 900;

  &.title.animate-left {
    opacity: 1;
    transform: translateX(0);
  }

  h2 {
    font-size: 40px;
    color: #29a6a4;
  }

  p {
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    width: 800px;
  }

  @media screen and (max-width: 540px) {
    h2 {
      text-align: center;
      width: 10em;
      font-size: 38px;
    }

    p {
      width: 22em;
    }
  }
`;