import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { BtnWrap, List } from './CardGallery.styled';
import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';

export const CardGallery = ({ visibleUsers }) => {
  const [cardsPerPage, setCardsPerPage] = useState(
    Number(localStorage.getItem('cardsPerPage')) || 3
  );
  useEffect(() => {
    localStorage.setItem('cardsPerPage', cardsPerPage);
  }, [cardsPerPage]);

  const handleClick = () => {
    setCardsPerPage(cardsPerPage + 3);
    console.log('клик');
    console.log(cardsPerPage);
  };

  return (
    <>
      <List>
        {visibleUsers
          .slice(0, cardsPerPage)
          .map(({ id, user, avatar, tweets, followers }) => (
            <Card
              key={id}
              user={user}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            />
          ))}
      </List>
      <BtnWrap>
        <BtnFollow handleClick={handleClick}>load more</BtnFollow>
      </BtnWrap>
    </>
  );
};
