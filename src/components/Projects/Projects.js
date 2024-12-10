import styled from "styled-components";

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 110px;
  padding-bottom: 50px;

  .hover{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &:hover .hover-active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: visibility 0.2s, transform 0.3s ease, opacity 0.4s ease;
    }
  }

  .my-projects {
    display: grid ;
    grid-template-columns: 360px 360px 360px;
    grid-template-rows: 320px 320px 320px;
    gap: 30px;
    margin-top: -60px;
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.animate-jump {
      opacity: 1;
      transform: scale(1);
    }
  }

  .info-lading-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    padding: 20px;
    border: 1px solid #29a6a4;
    border-radius: 20px;
    background: linear-gradient(180deg,
        rgba(41, 166, 164, 0.3) 0%, 
        rgba(16, 32, 50, 0.5) 100%);

    .page {
      width: 320px;
      height: 180px;
      border-radius: 10px;
      cursor: pointer;
    }

    h3 {
      font-size: 26px;
      text-align: center;
      margin: 10px 0 -5px 0;
    }

    .redirect-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0px;
    }
  }

  .hover-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;

    width: 320px;
    height: 181px;

    border-radius: 10px;
    background: linear-gradient(180deg, 
      rgba(0,0,0,0.72) 0%, 
      rgba(0,0,0,0.90) 65%, 
      rgba(0,0,0,0.97) 100%);

    position: relative;
    margin-top: -322px;

    transform: translateY(5px);

    p {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      margin-bottom: 0;
      width: 300px;
    }

    .tech-used {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 110px;
    padding-bottom: 150px;

    .my-projects {
      display: grid;
      gap: 150px;
      grid-template-columns: 1fr;
      grid-template-rows: 360px;
      margin-top: -170px;
      opacity: 1;
      transform: scale(1);

      .portifolio {
        margin-bottom: -150px;
      }
    }
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
      font-size: 32px;
    }

    p {
      width: 22em;
    }
  }
`;