import React, { useState } from "react";
import Prompt from "../components/Prompt/Prompt";
import Compeletion from "../components/Compeletion/Compeletion";
import ExpectedCompletion from "../components/ExpectedCompletion/ExpectedCompletion";
import PageOneSubmitSection from "../components/SubmitSection/PageOneSubmitSection";

const content =
  " Credit Card Allows you To Borrow Money From The Bank to Make Purchases, While A Debit Card Deducts Funds directly from your bank account.";

const pageOneContent = [
  {
    id: 1,
    prompt: " Prompt1",
    completion: "Completion1",
    rating: 0,
    reviews: "expected completion1",
  },
  {
    id: 2,
    prompt: " Prompt2",
    completion: "Completion2",
    rating: 0,
    reviews: "expected completion2",
  },
  {
    id: 3,
    prompt: " Prompt3",
    completion: "Completion3",
    rating: 0,
    reviews: "expected completion3",
  },
  {
    id: 4,
    prompt: " Prompt4",
    completion: "Completion4",
    rating: 0,
    reviews: "expected completion4",
  },
  {
    id: 5,
    prompt: " Prompt5",
    completion: "Completion5",
    rating: 0,
    reviews: "expected completion5",
  },
  {
    id: 6,
    prompt: " Prompt6",
    completion: "Completion6",
    rating: 0,
    reviews: "expected completion6",
  },
];

const PageOne = () => {
  const [allData, setAllData] = useState(pageOneContent);
  const [rating, setRating] = useState(0);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(content);

  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    const data = {
      rating,
      text,
    };
    localStorage.setItem("Datasaur", JSON.stringify(data));
    setEdit(false);
    setRating(0);
  };

  // const handleNext = () => {};

  return (
    <section className="relative h-full">
      <Prompt allData={allData} step={step} setStep={setStep} />
      <Compeletion
        allData={allData}
        step={step}
        rating={rating}
        setRating={setRating}
      />

      {rating < 5 && rating !== 0 && (
        <ExpectedCompletion
          allData={allData}
          step={step}
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
