import './Header.css'

import reactLogo from '@/assets/react.svg'


const Header = () => {
  return (
    <header>
      <img src={reactLogo} className="header__logo" alt="react-logo" />
      <h1 className="header__logo">
        Interbanking Challenge
      </h1>
    </header>
  );
};

export default Header;