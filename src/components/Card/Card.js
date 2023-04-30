import { AvatarBlock } from 'components/AvatarBlock/AvatarBlock';
import { CardStyled, FollowWrap } from './Card.styled';
import { Logo } from 'components/Logo/Logo';
import { MainImg } from 'components/MainImg/MainImg';
// import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { BtnFollowing } from 'components/Buttons/BtnFollowing/BtnFollowing';

export const Card = ({ id, user, avatar, tweets, followers }) => {
  return (
    <CardStyled key={id}>
      <Logo />
      <MainImg />
      <AvatarBlock avatar={avatar} user={user} />
      <FollowWrap>
        <InfoBlock tweets={tweets} followers={followers} />
        <BtnFollowing />
      </FollowWrap>
    </CardStyled>
  );
};
