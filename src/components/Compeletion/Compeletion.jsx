import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Compeletion = ({ rating, setRating }) => {
  return (
    <div className="p-4 ">
      <h6 className=" font-bold mb-3 ">Completion</h6>
      <div className="border p-4 rounded-lg bg-[#f9f9f9]">
        <p>
          Credit Card Allows you To Borrow Money From The Bank to Make
          Purchases, While A Debit Card Deducts Funds Directly From Your Bank
          Account.
        </p>
        <div className="flex gap-3 justify-end mt-10 text-[#666f87]">
          {rating >= 1 ? (
            <BsStarFill
              onClick={() => setRating(1)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar onClick={() => setRating(1)} className="cursor-pointer" />
          )}
          {rating >= 2 ? (
            <BsStarFill
              onClick={() => setRating(2)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar onClick={() => setRating(2)} className="cursor-pointer" />
          )}
          {rating >= 3 ? (
            <BsStarFill
              onClick={() => setRating(3)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar onClick={() => setRating(3)} className="cursor-pointer" />
          )}
          {rating >= 4 ? (
            <BsStarFill
              onClick={() => setRating(4)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar onClick={() => setRating(4)} className="cursor-pointer" />
          )}
          {rating === 5 ? (
            <BsStarFill
              onClick={() => setRating(5)}
              className="cursor-pointer"
            />
          ) : (
            <BsStar onClick={() => setRating(5)} className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Compeletion;
