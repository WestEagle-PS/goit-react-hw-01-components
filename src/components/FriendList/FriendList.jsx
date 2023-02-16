import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';
import css from '../FriendList/FriendList.module.css';

function FriendList({ friends = [] }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
