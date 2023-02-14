import './App.css';

import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </section>
      <section>
        <Statistics title="Upload stats" items={data} />
        {/* <Statistics items={data} /> */}
      </section>
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transactions} />;
      </section>
    </>
  );
}

export default App;
