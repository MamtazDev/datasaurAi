import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Compeletion = ({
  allData,
  step,
  hangleRating,
  handleReview,
}) => {
  const data = allData[step];
  const { id, rating, prompt, reviews, completion } = data;

  // console.log(data, "dataaa");
  return (
    <div className="p-4 ">
      <h6 className=" font-bold mb-3 ">Completion</h6>
      <div className="border p-4 rounded-lg bg-[#f9f9f9]">
        <p>{data?.completion}</p>
        <div className="flex gap-3 justify-end mt-10 text-[#666f87]">
          {rating >= 1 ? (
            <BsStarFill
              onClick={() => hangleRating(id, 1)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar
              onClick={() => hangleRating(id, 1)}
              className="cursor-pointer"
            />
          )}
          {rating >= 2 ? (
            <BsStarFill
              onClick={() => hangleRating(id, 2)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar
              onClick={() => hangleRating(id, 2)}
              className="cursor-pointer"
            />
          )}
          {rating >= 3 ? (
            <BsStarFill
              onClick={() => hangleRating(id, 3)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar
              onClick={() => hangleRating(id, 3)}
              className="cursor-pointer"
            />
          )}
          {rating >= 4 ? (
            <BsStarFill
              onClick={() => hangleRating(id, 4)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar
              onClick={() => hangleRating(id, 4)}
              className="cursor-pointer"
            />
          )}
          {rating === 5 ? (
            <BsStarFill
              onClick={() => hangleRating(id, 5)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar
              onClick={() => hangleRating(id, 5)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Compeletion;
