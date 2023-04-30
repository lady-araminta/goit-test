import { useSelector } from 'react-redux';
import { Card } from 'components/Card/Card';
import { List } from './CardGallery.styled';
import { selectUsers } from 'redux/users/usersSelectors';

export const CardGallery = () => {
  const users = useSelector(selectUsers);

  console.log(users);

  return (
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
  );
};
