import './App.scss';
import { NewUser } from './components/NewUser/NewUser';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { UserList } from './components/UserList.tsx/UserList';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="App__main">
        <div className="HeroSectionContainer">
          <HeroSection />
        </div>
       
        <div className="ContentContainer">
          <div className="UserListContainer">
            <UserList />
          </div>
          
          <div className="ApplyFormContainer">
            <NewUser />
          </div>
        </div>
      </main>
     
    </div>
  );
}

export default App;
