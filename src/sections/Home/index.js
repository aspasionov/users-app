import React from 'react';
import Button from 'Components/Button'
import Container from 'Components/Container'
import './styles.sass'

const Home = () => {
  const handleClick = (hash) => {
    location.hash =  ""
    location.hash =  hash
  }
  return <div className='home'> 
            <Container className='home__container'>
              <h1 className='home__title'>Test assignment for front-end developer</h1>
              <div className='home__subtitle'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
              <Button text="Sign up" handleClick={() => handleClick("#form")} />
            </Container>
          </div>;
}

export default Home;

