import React, { useContext, useEffect, useRef, useState } from "react";
import Prompt from "../components/Prompt/Prompt";
import Completions from "../components/Completions/Completions";
import PageTwoSubmitSection from "../components/SubmitSection/PageTwoSubmitSection";
import { AuthContext } from "../contexts/AuthProvider";
// import DragComp from "../components/DragComponent/DragComp";

const pageTwoContent = [
  {
    id: 1,
    prompt: " Prompt1",
    completion: [
      { id: 1, text: "Completion11" },
      { id: 2, text: "Completion12" },
      { id: 3, text: "Completion13" },
      { id: 4, text: "Completion14" },
    ],
  },
  {
    id: 2,
    prompt: " Prompt2",
    completion: [
      { id: 1, text: "Completion21" },
      { id: 2, text: "Completion22" },
    ],
  },
  {
    id: 3,
    prompt: " Prompt3",
    completion: [
      { id: 1, text: "Completion31" },
      { id: 2, text: "Completion32" },
      { id: 3, text: "Completion33" },
    ],
  },
  {
    id: 4,
    prompt: " Prompt4",
    completion: [
      { id: 1, text: "Completion41" },
      { id: 2, text: "Completion42" },
    ],
  },
  {
    id: 5,
    prompt: " Prompt5",
    completion: [
      { id: 1, text: "Completion51" },
      { id: 2, text: "Completion52" },
      { id: 3, text: "Completion53" },
      { id: 4, text: "Completion54" },
      { id: 5, text: "Completion55" },
      { id: 6, text: "Completion56" },
    ],
  },
  {
    id: 6,
    prompt: " Prompt6",
    completion: [
      { id: 1, text: "Completion61" },
      { id: 2, text: "Completion62" },
    ],
  },
];

const PageTwo = () => {
  const { user, completion } = useContext(AuthContext);
  const [allData, setAllData] = useState(pageTwoContent);
  const [step, setStep] = useState(0);
  const [completions, setCompletions] = useState(allData[step]?.completion);

  // drag and drop sorting
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = (id) => {
    let _completions = [...completions];

    const draggedItemContent = _completions.splice(dragItem.current, 1)[0];

    _completions.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    const filterData = allData.filter((item) => {
      if (item.id === id) {
        item.completion = _completions;
      }
      return item;
    });

    // console.log(id, "fillter");

    setCompletions(_completions);
    setAllData(filterData);
  };

  // next steper
  const handleNextP2 = () => {
    setStep((prev) => prev + 1);
  };

  // previous steper
  const handlePreviousP2 = () => {
    setStep((prev) => prev - 1);
  };

  // submiting data
  const handleSubmit = () => {
    const data = {
      completions: allData,
      userId: user?.userID,
      userEmail: user?.email,
    };
    fetch("http://localhost:8000/api/completions/add", {
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

  console.log(completion, "comm");

  useEffect(() => {
    if (completion) {
      setAllData(completion);
    }
    setCompletions(allData[step]?.completion);
  }, [handleSort, step]);
  return (
    <section className="relative h-full ">
      <Prompt
        allData={allData}
        step={step}
        handleNext={handleNextP2}
        handlePrevious={handlePreviousP2}
      />
      <Completions
        allData={allData}
        step={step}
        completions={completions}
        setCompletions={setCompletions}
        dragItem={dragItem}
        dragOverItem={dragOverItem}
        handleSort={handleSort}
      />
      <PageTwoSubmitSection
        allData={allData}
        step={step}
        handleSubmit={handleSubmit}
      />
      {/* <DragComp /> */}
    </section>
  );
};

export default PageTwo;
