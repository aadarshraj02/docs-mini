import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="relative w-60 h-72 rounded-lg p-5 bg-zinc-900/90 text-white">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  );
};

export default Card;
