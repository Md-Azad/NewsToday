import SocialLogin from "../SocialLogin/SocialLogin";
import FindUs from "./FindUs/FindUs";
import Qzone from "./Qzone/Qzone";

const RightNavbar = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Login With</h2>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNavbar;
