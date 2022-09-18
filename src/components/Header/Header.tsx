import './Header.scss';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';

export const Header:React.FC = () => {
  return (
    <header className="Header" id="header">
      <Logo />
      
      <nav className='Header__nav'>
        <Button>
          Users
        </Button>

        <Button>
          Sign up
        </Button>
      </nav>
     

    </header>
  )
}