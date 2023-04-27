import {
  Avatar,
  AvatarBlockCont,
  AvatarLine,
  AvatarWrap,
} from './AvatarBlock.styled';

export const AvatarBlock = () => {
  return (
    <AvatarBlockCont>
      <AvatarLine />
      <AvatarWrap>
        <Avatar />
      </AvatarWrap>
      <AvatarLine />
    </AvatarBlockCont>
  );
};
