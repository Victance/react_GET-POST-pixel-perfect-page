// import './App.scss';
import { ApplyForm } from './components/ApplyForm/ApplyForm';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { UserList } from './components/UserList.tsx/UserList';

function App() {
  return (
    <div className="App">
      <Header />

      <HeroSection />

      <UserList />

      <ApplyForm />
    </div>
  );
}

export default App;
