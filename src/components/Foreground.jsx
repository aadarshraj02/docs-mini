// import { useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.8mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "red",
      },
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 z-20 w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
