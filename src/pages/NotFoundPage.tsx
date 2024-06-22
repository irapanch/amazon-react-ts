import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <section>
      <h2>Ooops!... Page not found!</h2>
      <h2>
        You can try again{" "}
        <Link to="/">
          <span>here.</span>
        </Link>
      </h2>
    </section>
  );
};

export default NotFoundPage;
