import styled from "styled-components";

export const SobreMim = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-top: 120px;
  margin-bottom: 100px;

  img {
    width: 170px;
    border-radius: 50%;
    animation: 
    float 5s ease-in-out infinite,  
    pulseShadow 2.5s ease-in-out infinite;
  }

  .container-left-img {
    display: flex;
    width: 300px;
    opacity: 0;
    margin-top: -40px;
    transform: scale(0.5);
    transition: all 0.4s ease-in-out;

    &.animate-left {
      opacity: 1;
      transform: scale(1);
    }

    .img-0 {
      position: absolute;
      margin-top: -190px;
      margin-left: 100px;
      animation-delay: 0s;
    }

    .img-1 {
      position: absolute;
      margin-top: -100px;
      animation-delay: 0.18s;
    }

    .img-2 {
      position: absolute;
      margin-top: 5px;
      margin-left: 100px;
      animation-delay: 0.28s;
    }

    .img-3 {
      position: absolute;
      margin-top: 100px;
      animation-delay: 0.43s;
    }

    @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    }

    @keyframes pulseShadow {
      0%, 100% {
        box-shadow: 0 0 0 rgba(41, 166, 164, 0.1);
      }
      50% {
        box-shadow: 0 0 15px rgba(41, 166, 164, 0.8);
      }
    }
  }

  .container-right-text {
    display: flex;
    flex-direction: column;
    width: 700px;
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.4s ease-in-out;

    &.animate-right {
      opacity: 1;
      transform: translateX(0);
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #29a6a4;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .container-left-img {
      display: none;
    }
    
    .container-right-text {
      width: 20em;
    }
  }
`;