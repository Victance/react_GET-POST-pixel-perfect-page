import logo from '../../images/logo.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="Logo">
      <a href="header" className="Logo">
        <img 
          src={logo}
          alt="Logo" 
          className="logo__img" 
        />
      </a> 
    </div>
  )
}