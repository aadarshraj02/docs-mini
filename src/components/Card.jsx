import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div>
      <div className="relative w-60 h-72 rounded-[30px] px-5 py-10 bg-zinc-900/90 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between mb-3 px-8  py-3">
            <h5>.4mb</h5>
            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600">
              <LuDownload size=".7em" className="text-white" />
            </span>
          </div>
          <div className="w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
