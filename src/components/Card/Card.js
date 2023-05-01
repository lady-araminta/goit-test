import { AvatarBlock } from 'components/AvatarBlock/AvatarBlock';
import { BtnWrap, CardStyled, Wrapper } from './Card.styled';
import { Logo } from 'components/Logo/Logo';
import { MainImg } from 'components/MainImg/MainImg';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { useState } from 'react';
import { BtnFollowing } from 'components/Buttons/BtnFollowing/BtnFollowing';

export const Card = ({ id, user, avatar, tweets, followers }) => {
  const [isFollowing, setIsFollowing] = useState(true);
  const [counter, setCounter] = useState(followers);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    localStorage.setItem(`subscribed-${user}`, isFollowing);
    const newCount = isFollowing ? followers + 1 : followers;
    setCounter(newCount);
    localStorage.setItem(`count-${user}`, counter);
  };

  return (
    <CardStyled key={id}>
      <Logo />
      <AvatarBlock avatar={avatar} user={user} />
      <Wrapper>
        <MainImg />
        <InfoBlock tweets={tweets} followers={counter} />
      </Wrapper>
      <BtnWrap onClick={handleClick}>
        <BtnFollowing isFollowing={isFollowing} />
      </BtnWrap>
    </CardStyled>
  );
};
