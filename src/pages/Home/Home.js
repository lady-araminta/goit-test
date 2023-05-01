import { Link } from 'react-router-dom';
import { Main, WelcomeText } from './Home.styled';
import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';

export const Home = () => {
  return (
    <Main>
      <WelcomeText>welcome!</WelcomeText>
      <Link to="/tweets">
        <BtnFollow>go to tweets</BtnFollow>
      </Link>
    </Main>
  );
};
