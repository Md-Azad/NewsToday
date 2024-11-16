import swimming from "../../../assets/swimming.png";
import classImg from "../../../assets/class.png";
import playImg from "../../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-300">
      <h2 className="font-semibold text-xl ml-8 py-3">Q-Zone</h2>
      <div className="flex flex-col items-center mb-4">
        <img src={swimming} alt="" />
        <p className="font-semibold">Swimming</p>
      </div>
      <div className="flex flex-col items-center mb-4">
        <img src={classImg} alt="" />
        <p className="font-semibold">Class</p>
      </div>
      <div className="flex flex-col items-center mt-2 pb-4">
        <img src={playImg} alt="" />
        <p className="font-semibold">Playground</p>
      </div>
    </div>
  );
};

export default Qzone;
