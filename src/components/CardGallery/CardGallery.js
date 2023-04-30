import { Card } from 'components/Card/Card';
import { users } from 'utils/users';
import { List } from './CardGallery.styled';

export const CardGallery = () => {
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
