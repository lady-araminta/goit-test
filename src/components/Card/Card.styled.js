import styled from 'styled-components';

export const CardStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const FollowWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  justify-content: center;
  align-items: center;
`;
