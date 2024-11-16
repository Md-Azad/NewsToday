import { FaFacebook, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="mt-3 *:w-full space-y-2">
      <button className="btn btn-outline border border-black">
        <FaGoogle />
        Login with Google
      </button>
      <button className="btn btn-outline border  border-blue-500 text-blue-400">
        <FaFacebook />
        Login with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
