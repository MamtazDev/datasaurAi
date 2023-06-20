import React from "react";

const PageOneSubmitSection = ({ allData, step, handleSubmit }) => {
  return (
    <section className="border-t p-4 absolute bottom-[11px] w-full bg-white text-end text-white">
      <button
        disabled={allData.length !== step + 1}
        className="btn text-white bg-[#538cff] px-8 py-2 rounded-[25px]"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default PageOneSubmitSection;
