import './App.css';
import userData from "./userData.json";
import Profile from "./components/Profile.jsx";
import friends from "./friends.json";
import FriendList from './components/FriendList.jsx';
import transactions from "./transactions.json";
import TransactionHistory from './components/TransactionHistory.jsx';

const App = () => {
  return (
    <>
      <h2 className='task-title'>Task 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className='task-title'>Task 2</h2>
      <FriendList friends={friends} />
      <h2 className='task-title'>Task 3</h2>
      <TransactionHistory items={transactions}/>
    </>
  );
};

export default App
