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

export const Experiencias = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 150px;
  padding-bottom: 50px;
  overflow: hidden;
  z-index: 1;

  .carousel-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1020px;
    position: absolute;

    button {
      background-color: transparent;
      border: none;
      opacity: 0.5;

      img {
        width: 50px;
     }

     &:hover {
      opacity: 1;
     }

     &:active img{
      opacity: 0.3;
     }
    }
  }
  
  .experiences {
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  }

  .jump {
    opacity: 1;
    transform: scale(1);
  }

  .pages-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: 100;
    margin-top: -20px;

    .page1, .page2, .page3{
      width: 25px;
      height: 2px;
      background-color: #ccc;
      transition: transform 0.4s ease-out,
    }

    .page1.active, .page2.active, .page3.active {
      transition: 0.2s ease;
      background-color: #000;
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 540px) {
    padding-top: 100px;
    
    .carousel-navigation {
      gap: 275px;
      opacity: 1;
    }
  }
`;

export const ExpertiseInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: -20px;

  .treinador, .developer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 1000px;
    height: 320px;
    overflow: hidden;
    background: linear-gradient(180deg,
        rgba(41, 166, 164, 0.7) 0%, 
        rgba(16, 32, 50, 1) 100%);
    border-radius: 50px;
    border: 2px solid rgba(41, 166, 164, 1);

    h3 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: -10px;
    }

    h4 {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 500;
      font-style: italic;
      text-align: center;
      width: 900px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      width: 900px;
    }
  }

  .treinador, .developer {
    opacity: 0;
  }

  .treinador.active {
    opacity: 1;
    margin-left: 1040px;
  }

  .developer.active {
    opacity: 1;
    margin-left: -1040px;
  }

  @media screen and (max-width: 540px) {
    .treinador, .developer{
      width: 22em;
      height: 680px;

      h3 {
        font-size: 26px;
        text-align: center;
      } 

      h4 {
        width: 330px;
      }

      p {
        width: 19.37em;
        font-size: 14px;
      }
    }

    .treinador.active {
      opacity: 1;
      margin-left: 392px;
    }

    .developer.active {
      opacity: 1;
      margin-left: -392px;
    }
  }
`;