import styled from 'styled-components';
import backgroundImg from '../../images/background.jpg';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WelcomeText = styled.span`
  font-weight: 600;
  font-size: 48px;
  line-height: 52px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;
