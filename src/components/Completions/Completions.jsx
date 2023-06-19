import React, { useEffect, useRef, useState } from "react";
import CompletionCard from "./CompletionCard";

import { BiGridVertical } from "react-icons/bi";

const completionsItems = [
  {
    id: 1,
    text: "Credit card allows you to borrow money from the bank to make purchases, while a debit card deducts funds directly from your bank account.",
  },
  {
    id: 2,
    text: "Credit card involves borrowing money with the possibility to accruing interest, while debit card uses your own funds without any borrowing or interest.",
  },
  {
    id: 3,
    text: "Credit card offers a line of credit that needs to be repaid, whereas debit card provides access to your own money available in a linked bank account.",
  },
];

const Completions = ({ allData, step }) => {
  const [completions, setCompletions] = useState(allData[step]?.completion);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let _completions = [...completions];

    const draggedItemContent = _completions.splice(dragItem.current, 1)[0];

    _completions.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setCompletions(_completions);
  };

  useEffect(() => {
    setCompletions(allData[step]?.completion);
  }, [step]);
  return (
    <>
      <div className="p-4 ">
        <h6 className=" font-bold mb-3 ">Completion</h6>
        <p className="text-[#7b8499] text-[14px] mb-5">
          Please read through the completions below and rank them in descending
          order of quality by dragging each completion.
        </p>

        <div className="flex flex-col gap-2">
          {completions.map((item, idx) => (
            <div
              className="p-4 bg-[#f9f9f9] rounded-lg border flex items-center gap-3"
              key={item.id}
              draggable
              onDragStart={(e) => (dragItem.current = idx)}
              onDragEnter={(e) => (dragOverItem.current = idx)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <BiGridVertical className="text-[#70788f] text-[18px] cursor-grab" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Completions;
