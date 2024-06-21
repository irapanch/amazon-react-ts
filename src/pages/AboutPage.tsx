import { FC } from "react";
import { Link } from "react-router-dom";

const AboutPage: FC = () => {
  return (
    <section>
      <h1>About us</h1>
      <h3>This application will help you effectively conduct advertising.</h3>
      <h3>
        Let`s{" "}
        <Link to="/dashboard">
          <span>try!</span>
        </Link>
      </h3>
    </section>
  );
};

export default AboutPage;
