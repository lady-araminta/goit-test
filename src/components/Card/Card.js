import { AvatarBlock } from 'components/AvatarBlock/AvatarBlock';
import { CardStyled, FollowWrap } from './Card.styled';
import { Logo } from 'components/Logo/Logo';
import { MainImg } from 'components/MainImg/MainImg';
import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';

export const Card = () => {
  return (
    <CardStyled>
      <Logo />
      <MainImg />
      <AvatarBlock />
      <FollowWrap>
        <InfoBlock />
        <BtnFollow />
      </FollowWrap>
    </CardStyled>
  );
};
