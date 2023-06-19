import React from "react";
import { BiGridVertical } from "react-icons/bi";

const CompletionCard = ({ item }) => {
  return (
    <div
      className="p-4 bg-[#f9f9f9] rounded-lg border flex items-center gap-3"
      draggable
    >
      <BiGridVertical className="text-[#70788f] text-[18px] cursor-grab" />
      <p>{item.text}</p>
    </div>
  );
};

export default CompletionCard;
