import { Link } from "react-router-dom";
import userIcon from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="empty"></div>
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-4 items-center">
        <img src={userIcon} alt="" />
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
