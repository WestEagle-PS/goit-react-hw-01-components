import './App.css';

import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" items={data} />
      <Statistics items={data} />

      <FriendList friends={friends} />
    </div>
  );
}

export default App;
