import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <section>
      <h1>Welcome to the application for effective advertising management</h1>
      <p>
        More{" "}
        <Link to="/about">
          <span>about us</span>
        </Link>
      </p>
      <p>
        Go to{" "}
        <Link to="/dashboard">
          <span>dashboard</span>
        </Link>
      </p>
    </section>
  );
};

export default HomePage;
