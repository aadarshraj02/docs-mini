import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference}>
      <div className="relative w-60 h-72 rounded-[30px] px-5 py-10 bg-zinc-900/90 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between mb-3 px-8  py-3">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600">
              {data.close ? (
                <LuDownload size=".7em" className="text-white" />
              ) : (
                <IoMdCloseCircleOutline size=".7em" className="text-white" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
