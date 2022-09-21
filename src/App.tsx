import './App.scss';
import { NewUser } from './components/NewUser/NewUser';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { UserList } from './components/UserList.tsx/UserList';
import { useEffect, useState } from 'react';
import { IUser } from './types/IUser';
import { getUsersPagination } from './api/users';

function App() {
  const [count, setCount] = useState(6);
  const [users, setUsers] = useState<IUser[]>([]);
  const [total_users, setTotalUsers] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  

  const displayUsers = (count: number) => {
    getUsersPagination(count).then(data => 
      {
        setTotalUsers(data.total_users)
        
        setUsers(data.users.sort((user1, user2) => (
        user2.registration_timestamp - user1.registration_timestamp
        )))
      }
    ).finally(() => setLoaded(true));
  }

  useEffect(() => {
    displayUsers(count);
  }, [count])

  const increaseCount = () => {
    setCount(count => count + 6)
  };
  
  return (
    <>
      <Header />

      <main className="App__main">
        <div className="HeroSectionContainer">
          <HeroSection />
        </div>
       
        <div className="ContentContainer">
          <div className="UserListContainer">
            <UserList 
              count={count} 
              increaseCount={increaseCount}
              users={users}
              total_users={total_users}
              isLoaded={isLoaded}
            />
          </div>
          
          <div className="NewUserContainer">
            <NewUser displayUsers={displayUsers} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
