import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img className={css.img}
          src={image}
          alt="User avatar"
          
        />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.itemInfo}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.itemInfo}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.itemInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

