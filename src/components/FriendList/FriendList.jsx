import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

function FriendList({ friends = [] }) {
  return (
    <>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendsListItem key={friend.id} {...friend} />
        ))}
      </ul>
    </>
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
