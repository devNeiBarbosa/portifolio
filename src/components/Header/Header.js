import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 350px;
  padding: 20px;
  position: fixed;
  width: 100vw;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
  box-shadow: 0 -2px 10px 0 white;
  z-index: 901;

  .navbar-left {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 40px;
        font-weight: 400;
        cursor: pointer;
        margin: 0;

        span {
            color: #29a6a4;
            font-weight: 500;
        }

        .span2 {
            font-size: 20px;
            font-style: italic;
            color: #fff;
        }
    }
  }

  .navbar-right {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      cursor: pointer;
      margin: 0;

      li {
        font-size: 16px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li:hover {
        color: #29a6a4;
        transition: 0.2s ease-in-out;

        &:active {
          transform: scale(0.9);
        }
      }
    }
      
  }

  @media screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(50px);

    .navbar-left {
      display: flex;
      margin-left: -80px;
    }
    .navbar-right {
      display: none;
    }

  }
`;

export const SideBar = styled.aside`
  display: none;

  @media screen and (max-width: 540px) {
    display: flex;

    #hamburger {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 150;
      background-color: transparent;
      border: none;
      z-index: 901;
    }

    #close-sidebar {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 150;
      background-color: transparent;
      border: none;
      z-index: 1001;

      visibility: hidden;
      opacity: 0;
      transform: scale(0) rotate(0deg);
      transition: opacity 0.3s ease, transform 0.5s ease;
      transition-delay: 0.5s;

      &.visible {
      opacity: 1;
      visibility: visible;
      transform: scale(1) rotate(360deg);
      transition-delay: 0s;
    }
    }

    .aside {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      background: linear-gradient(180deg,
          rgba(41, 166, 164, 1) 0%, 
          rgba(16, 32, 50, 0.96) 100%); 
      border: none;

      opacity: 0;
      transform: translateX(100%);
      transition: opacity 0.3s ease, transform 0.3s ease;
      visibility: hidden;

      &.active {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
      }

      &.closing {
        opacity: 0;
        transform: translateX(100%);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        img {
          width: 50px;
          margin-left: -20px;
        }
      }

      li {
        font-size: 30px;
        margin-left: -20px;
      }

      li:hover {
        color: #000;
        transition: 0.2s ease-in-out;

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;