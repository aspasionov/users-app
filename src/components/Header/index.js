import React from 'react';
import logourl from 'Images/Logo.svg'
import Button from 'Components/Button'
import Container from 'Components/Container'
import './styles.sass'

const Header = () => {
  return <header className='header'>
      <Container className="header__container">
        <img src={logourl} alt="" className="header__logo" />
        <div className='header__controls'>
          <Button text="button 2"/>
          <Button text="button 3"/>
        </div>
      </Container>
    </header>;
}

export default Header;