import { AvatarBlock } from 'components/AvatarBlock/AvatarBlock';
import { CardStyled, FollowWrap } from './Card.styled';
import { Logo } from 'components/Logo/Logo';
import { MainImg } from 'components/MainImg/MainImg';
// import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { BtnFollowing } from 'components/Buttons/BtnFollowing/BtnFollowing';

export const Card = () => {
  return (
    <CardStyled>
      <Logo />
      <MainImg />
      <AvatarBlock />
      <FollowWrap>
        <InfoBlock />
        <BtnFollowing />
      </FollowWrap>
    </CardStyled>
  );
};
