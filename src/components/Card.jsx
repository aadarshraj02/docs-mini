import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="relative w-60 h-72 rounded-[30px] px-5 py-10 bg-zinc-900/90 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="absolute bottom-0 left-0 w-full py-3 bg-sky-200"></div>
      </div>
    </div>
  );
};

export default Card;
