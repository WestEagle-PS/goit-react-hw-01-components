import PropTypes from 'prop-types';

function FriendsListItem({ id, avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className="status" />
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
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
