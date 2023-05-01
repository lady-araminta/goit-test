import { BtnBody, BtnText } from './BtnFollow.styled';

export const BtnFollow = ({ children }) => {
  return (
    <BtnBody type="button">
      <BtnText>{children}</BtnText>
    </BtnBody>
  );
};
