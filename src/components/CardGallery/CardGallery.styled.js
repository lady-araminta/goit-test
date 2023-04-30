import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: 1440px) {
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
