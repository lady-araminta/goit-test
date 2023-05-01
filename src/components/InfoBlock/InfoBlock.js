import { Amount } from 'components/Amount/Amount';
import { InfoCont } from './Infoblock.styled';

const formattingNumber = number => {
  return number.toLocaleString('en-US', { useGrouping: true });
};

export const InfoBlock = ({ tweets, followers }) => {
  return (
    <InfoCont>
      <Amount>{tweets} tweets</Amount>
      <Amount>{formattingNumber(followers)} Followers</Amount>
    </InfoCont>
  );
};
