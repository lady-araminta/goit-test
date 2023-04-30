import styled from 'styled-components';

export const ContainerStyled = styled.div`
  outline: 1px solid red;
  position: relative;
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1240px) {
    width: 1440px;
  }
`;
