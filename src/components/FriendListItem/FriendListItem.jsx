import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
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