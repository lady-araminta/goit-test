import {
  Avatar,
  AvatarBlockCont,
  AvatarLine,
  AvatarWrap,
} from './AvatarBlock.styled';

export const AvatarBlock = ({ avatar, user }) => {
  return (
    <AvatarBlockCont>
      <AvatarLine />
      <AvatarWrap>
        <Avatar src={avatar} alt={user} />
      </AvatarWrap>
      <AvatarLine />
    </AvatarBlockCont>
  );
};
