import { CardGallery } from 'components/CardGallery/CardGallery';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { LinkStyled, Wrapper } from './Tweets.styled';
import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUsers } from 'utils/api';

const getfilteredUsers = (users, filter) => {
  return users.filter(user => {
    const isFollowing = localStorage.getItem(`following-${user.id}`) === 'true';
    switch (filter) {
      case 'follow':
        return !isFollowing;
      case 'following':
        return isFollowing;
      default:
        return true;
    }
  });
};

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const visibleUsers = getfilteredUsers(users, filter);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const data = await fetchUsers();
        setUsers(prevUsers => [...prevUsers, ...data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTweets();
  }, []);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <LinkStyled to={backLink}>
          <BtnFollow>back to start</BtnFollow>
        </LinkStyled>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </Wrapper>
      <CardGallery visibleUsers={visibleUsers} />
    </Container>
  );
};
