import './Header.scss';
import { Button } from '../Button/Button';
import logo from '../../images/logo.svg';

export const Header:React.FC = () => {
  return (
    <header className="Header" id="header">
      <div className="HeaderContainer">
          <div className="Header__logo">
            <img src={logo} alt="Logo" />
          </div> 
        
        <nav className='Header__nav'>
          <a href="#UserList">
            <Button>
              Users
            </Button>
          </a>

          <a href="#NewUser">
            <Button>
              Sign up
            </Button>
          </a>
        </nav>
      </div>
    </header>
  )
}