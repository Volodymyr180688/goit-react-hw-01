import css from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <div className={css.box}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p style={{ color: statusColor }}>{statusText}</p>
    </div>
  );
}
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
