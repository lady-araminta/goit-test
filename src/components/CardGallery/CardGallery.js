import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { Card } from 'components/Card/Card';
import { List } from './CardGallery.styled';
import { selectStatusFilter, selectUsers } from 'redux/selectors';

const getVisibleUsers = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter(user => !user.following);
    case statusFilters.following:
      return users.filter(user => user.following);
    default:
      return users;
  }
};

export const CardGallery = () => {
  const users = useSelector(selectUsers);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleUsers = getVisibleUsers(users, statusFilter);

  return (
    <List>
      {visibleUsers.map(({ id, user, avatar, tweets, followers }) => (
        <Card
          key={id}
          user={user}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </List>
  );
};
