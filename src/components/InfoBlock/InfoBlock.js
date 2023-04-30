import { Amount } from 'components/Amount/Amount';
import { InfoCont } from './Infoblock.styled';

export const InfoBlock = ({ tweets, followers }) => {
  return (
    <InfoCont>
      <Amount>{tweets} tweets</Amount>
      <Amount>{followers} Followers</Amount>
    </InfoCont>
  );
};
