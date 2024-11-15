import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Headline = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} className="space-x-8">
        <Link to="/news">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/news">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/news">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default Headline;
