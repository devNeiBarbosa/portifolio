import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 280px;
  padding-top: 200px;

  .container-left {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;

    &.animate-left {
      opacity: 1;
      transform: translateX(0);
    }; 

    .my-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 262px;
        height: 27px;
        margin-left: 135px;
        margin-top: -15px;
        
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        
        background: linear-gradient(180deg,
          rgba(41, 166, 164, 1) 0%, 
          rgba(16, 32, 50, 1) 100%); 
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 15px;   
      }

      h1 {
        display: flex;
        gap: 25px;
        font-size: 63.2px;
        font-weight: 700;

        span {
          color: #29a6a4;
        }
      }
    };

    p {
      font-size: 15px;
      line-height: 22px;
      font-weight: 300;
      width: 540px;
    };

  }

  .container-right {
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;

    &.animate-right {
      opacity: 1;
      transform: scale(1);
    }

    img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background-color: #29a6a4;
      animation: 
        moveUpDown 3s ease-in-out infinite, 
        shadowPulse 3s ease-in-out infinite;
      transform: translateX(0);
    }

    @keyframes moveUpDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px); /* Ajuste o quanto o elemento sobe */
      }
    }

    @keyframes shadowPulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 60, 76, 0.8);
      }
      50% {
        box-shadow: 0 0 100px rgba(0, 60, 76, 1); 
      }
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column ;
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding-top: 130px;

    .container-left {
      width: 25em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transform: translateX(0);

      .my-info {

        h1 {
          font-size: 53px;
          gap: 15px;
        }

        h3 {
          margin-top: 0px;
          margin-left: 0px;
        }

      }     

      p {
        text-align: center;
        font-size: 16px;
        width: 22em;
      }
    }

    .container-right {
      img {
        width: 300px;
        height: 300px;
        z-index: -1;
      }
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  width: 190px;
  gap: 10px;

  .p {
    margin-top: 5px;
  }

  .linkedin {
    display: flex;
    width: 25px;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }

    &:active {
      transform: scale(0.7);
    }
  }

  .github {
    width: 30px;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }

    &:active {
      transform: scale(0.7);
    }
  }
`;