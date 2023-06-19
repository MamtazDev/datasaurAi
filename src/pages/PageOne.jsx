import React, { useState } from "react";
import Prompt from "../components/Prompt/Prompt";
import Compeletion from "../components/Compeletion/Compeletion";
import ExpectedCompletion from "../components/ExpectedCompletion/ExpectedCompletion";
import PageOneSubmitSection from "../components/SubmitSection/PageOneSubmitSection";

const content =
  " Credit Card Allows you To Borrow Money From The Bank to Make Purchases, While A Debit Card Deducts Funds directly from your bank account.";

const PageOne = () => {
  const [rating, setRating] = useState(0);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(content);

  const handleSubmit = () => {
    const data = {
      rating,
      text,
    };
    localStorage.setItem("Datasaur", JSON.stringify(data));
    setEdit(false);
    setRating(0);
  };

  return (
    <section className="relative h-full">
      <Prompt />
      <Compeletion rating={rating} setRating={setRating} />
      {/* <Compeletion rating={rating} setRating={setRating} />
      <Compeletion rating={rating} setRating={setRating} />
      <Compeletion rating={rating} setRating={setRating} />
      <Compeletion rating={rating} setRating={setRating} />
      <Compeletion rating={rating} setRating={setRating} /> */}
      {rating < 5 && rating !== 0 && (
        <ExpectedCompletion
          edit={edit}
          setEdit={setEdit}
          text={text}
          setText={setText}
        />
      )}
      <PageOneSubmitSection rating={rating} handleSubmit={handleSubmit} />
    </section>
  );
};

export default PageOne;
