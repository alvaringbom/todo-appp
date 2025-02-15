import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-content">
      <h1>Hej! Har du lite saker att ta tag i?</h1>
      <p>
        Här kan du få hjälp med att strukturera upp dina sysslor.
        <br></br>
        Välkommen!
      </p>
      <Link to="/todo" className="start-button">
        Starta
      </Link>
    </div>
  );
};

export default Home;
