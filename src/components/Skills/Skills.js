import styled from "styled-components";

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
      font-size: 32px;
    }

    p {
      width: 22em;
    }
  }
`;

export const Habilidades = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-top: 140px;
  overflow: hidden;
  
  img {
    width: 120px;
    cursor: pointer;

    &.react {
      animation: girar 20s linear infinite;

      @keyframes girar {
        from {transform: rotate(0deg)}

        to {transform:rotate(360deg)}
      }
    }

    &.docker {
      width: 100px;
      margin: 0px 10px;
    }
  }

  .icons-tech {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    transform: translateX(50%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    opacity: 0;

    &.animate-right {
      opacity: 1;
      transform: translateX(0);
    }

    .icons-top {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;
    }

    .icons-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;
    }
  } 

  @media screen and (max-width: 540px) {
    padding-top: 120px;

    img {

      &.docker {
          margin-top: 10px;
          margin-bottom: 10px;
        }
    }
    .icons-tech {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icons-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .icons-bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;