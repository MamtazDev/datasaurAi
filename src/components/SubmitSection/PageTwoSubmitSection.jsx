import React from "react";

const PageTwoSubmitSection = ({ allData, step, handleSubmit }) => {
  return (
    <section className="border-t p-4 absolute bottom-[11px]  w-full text-end bg-white">
      <button
        className="btn text-white bg-[#538cff] px-8 py-2 rounded-[25px]"
        disabled={allData.length !== step + 1}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default PageTwoSubmitSection;
