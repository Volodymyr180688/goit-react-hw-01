import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li  className={css.item} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}
