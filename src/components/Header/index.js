import React from 'react';
import logourl from 'Images/Logo.svg'
import Button from 'Components/Button'
import Container from 'Components/Container'
import './styles.sass'

const Header = () => {
  const handleClick = (hash) => {
    window.location.hash = hash
  }
  return <header className='header'>
      <Container className="header__container">
        <img src={logourl} alt="" className="header__logo" />
        <div className='header__controls'>
          <Button text="Users" handleClick={() => handleClick("#users")} />
          <Button text="Sign up" handleClick={() => handleClick("#form")} />
        </div>
      </Container>
    </header>;
}

export default Header;