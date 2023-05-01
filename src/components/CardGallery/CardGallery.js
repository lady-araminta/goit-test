import { Card } from 'components/Card/Card';
import { List, BtnWrap } from './CardGallery.styled';
// import { useEffect, useState } from 'react';
// import { fetchUsers } from 'utils/api';
// import { BtnLoadMore } from 'components/Buttons/BtnLoadMore/BtnLoadMore';
import { users } from 'utils/users';
import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';

export const CardGallery = () => {
  // const [users, setUsers] = useState([]);
  // const [perPage, setPerPage] = useState(1);
  // const [moreCards, setMoreCards] = useState(true);

  // const getTweets = async () => {
  //   try {
  //     const data = await fetchUsers();
  //     setUsers(prevUsers => [...prevUsers, ...data]);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getTweets();
  // }, [perPage]);

  // const handleClick = () => {
  //   setPerPage(prevPage => prevPage + 1);
  // };

  return (
    <>
      <List>
        {users.map(({ id, user, avatar, tweets, followers }) => (
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
        <BtnFollow>load more</BtnFollow>
      </BtnWrap>
    </>
  );
};
