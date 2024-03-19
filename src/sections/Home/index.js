import React from "react";
import Button from "Components/Button";
import "./styles.sass";

const Home = () => {
  const handleClick = (hash) => {
    window.location.hash = "";
    window.location.hash = "#form";
  };

  return (
    <section className="home">
      <div className="home__body">
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button text="Sign up" handleClick={handleClick}></Button>
      </div>
    </section>
  );
};

export default Home;
