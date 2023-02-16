import PropTypes from 'prop-types';
import css from '../FriendList/FriendListItem.module.css';

function FriendsListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status : css.offline} />
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsListItem;
