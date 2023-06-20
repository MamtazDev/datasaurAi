import React, { useState } from "react";

const ExpectedCompletion = ({
  edit,
  setEdit,
  text,
  setText,
  allData,
  step,
  handleReview,
}) => {
  const data = allData[step];
  const { id, rating, prompt, reviews, completion } = data;

  return (
    <div className="p-4 ">
      <h6 className=" font-bold mb-3 ">Your expected completion:</h6>
      {!edit && (
        <div className="border p-4 rounded-lg mb-3 bg-[#f9f9f9]">
          <p>{reviews}</p>
          <div
            className="flex  justify-end mt-10 text-[#3383ff] cursor-pointer"
            onClick={() => setEdit(true)}
          >
            Edit
          </div>
        </div>
      )}
      {edit && (
        <textarea
          className="border p-4 w-full h-[120px] bg-[#f9f9f9] rounded-lg focus:outline-none"
          value={reviews}
          onChange={(e) => handleReview(id, e.target.value)}
        />
      )}
    </div>
  );
};

export default ExpectedCompletion;
