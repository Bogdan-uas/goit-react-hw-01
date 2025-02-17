import './css/App.css'
import userData from "./userData.json";
import Profile from "./components/Profile.jsx"

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
    </>
  );
};

export default App
