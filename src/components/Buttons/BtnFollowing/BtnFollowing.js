import { BtnBody, BtnText } from './BtnFollowing.styled';

export const BtnFollowing = ({ isFollowing }) => {
  const getBgc = isFollowing => {
    return {
      backgroundColor: !isFollowing ? '#5CD3A8' : '#EBD8FF',
    };
  };

  const label = isFollowing ? 'Follow' : 'Following';

  return (
    <BtnBody type="button" style={getBgc(isFollowing)}>
      <BtnText>{label}</BtnText>
    </BtnBody>
  );
};
