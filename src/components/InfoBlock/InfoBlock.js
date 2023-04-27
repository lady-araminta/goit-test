import { Amount } from 'components/Amount/Amount';
import { InfoCont } from './Infoblock.styled';

export const InfoBlock = () => {
  return (
    <InfoCont>
      <Amount>777 tweets</Amount>
      <Amount>100500 Followers</Amount>
    </InfoCont>
  );
};
