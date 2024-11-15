import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2>Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
    </div>
  );
};

export default Header;