import React, { useContext, useEffect, useState } from "react";
import Prompt from "../components/Prompt/Prompt";
import Compeletion from "../components/Compeletion/Compeletion";
import ExpectedCompletion from "../components/ExpectedCompletion/ExpectedCompletion";
import PageOneSubmitSection from "../components/SubmitSection/PageOneSubmitSection";
import { data } from "autoprefixer";
import { AuthContext } from "../contexts/AuthProvider";

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
  const { user, setUser, reviews } = useContext(AuthContext);
  const [allData, setAllData] = useState(pageOneContent);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(content);
  const [startEditing, setStartEditing] = useState(false);

  console.log(user, "iii");

  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    const data = {
      reviews: allData,
      userId: user?.userID,
      userEmail: user?.email,
    };
    fetch("http://localhost:8000/api/reviews/add", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setStep(0);
        }
      });
  };

  // next steper
  const handleNextP1 = () => {
    setStep((prev) => prev + 1);
    setEdit(false);
  };

  // previous steper
  const handlePreviousP1 = () => {
    setStep((prev) => prev - 1);
    setEdit(false);
  };

  // Rating
  const hangleRating = (id, rating) => {
    const filterData = allData.filter((item) => {
      if (item.id === id) {
        item.rating = rating;
      }
      return item;
    });
    setAllData(filterData);

    if (rating < 5 && rating !== 0) {
      setStartEditing(true);
    } else {
      setStartEditing(false);
    }
  };

  // reviews
  const handleReview = (id, reviews) => {
    const filterData = allData.filter((item) => {
      if (item.id === id) {
        item.reviews = reviews;
      }
      return item;
    });
    setAllData(filterData);
  };

  // editing

  useEffect(() => {
    const dd = allData[step];
    if (dd.rating === 0) {
      setStartEditing(false);
    }
    if (dd.rating === 5) {
      setStartEditing(false);
    }
    if (dd.rating !== 0 && dd.rating !== 5) {
      setStartEditing(true);
    }
    if (reviews) {
      setAllData(reviews);
    }
  }, [hangleRating, handleReview, step]);

  return (
    <section className="relative h-full">
      <Prompt
        allData={allData}
        step={step}
        handleNext={handleNextP1}
        handlePrevious={handlePreviousP1}
      />
      <Compeletion
        allData={allData}
        step={step}
        hangleRating={hangleRating}
        handleReview={handleReview}
      />

      {startEditing && (
        <ExpectedCompletion
          allData={allData}
          step={step}
          edit={edit}
          setEdit={setEdit}
          text={text}
          setText={setText}
          handleReview={handleReview}
        />
      )}
      <PageOneSubmitSection
        allData={allData}
        step={step}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default PageOne;
