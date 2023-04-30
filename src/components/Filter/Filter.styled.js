import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  @media (min-width: 1440px) {
    margin-top: 16px;
  }
`;
export const Label = styled.label`
  display: block;
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #5736a3;
  text-align: center;
`;
export const Select = styled.select`
  width: 240px;
  height: 50px;
  border-radius: 11px;
  padding-left: 16px;
`;
export const Option = styled.option``;
