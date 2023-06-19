import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Prompt = ({ allData, step, setStep }) => {
  const data = allData[step];
  return (
    <div className="border-b p-4 flex justify-between items-baseline">
      <div>
        <h6 className=" font-bold mb-3 ">Prompt</h6>
        <p>{data?.prompt}</p>
      </div>
      <div className="flex gap-4 items-center">
        <button
          className="h-full"
          onClick={() => setStep((prev) => prev - 1)}
          disabled={step === 0}
        >
          {" "}
          <FiChevronLeft className="h-full text-[20px] text-[#aac7fe]" />
        </button>

        <div className="border px-5 rounded">{step + 1}</div>
        <div>/ {allData.length}</div>

        <button
          className="h-full"
          onClick={() => setStep((prev) => prev + 1)}
          disabled={step + 1 === allData.length}
        >
          <FiChevronRight className="h-full text-[20px] text-[#aac7fe]" />
        </button>
      </div>
    </div>
  );
};

export default Prompt;
