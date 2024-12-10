import styled from "styled-components";

/* 
cores do projeto
#003c4c
#102032
#29a6a4 
*/

export const WppIcon = styled.div`
  position: fixed;
  right: 20px;
  top: 91%;
  
  img {
    width: 40px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`;