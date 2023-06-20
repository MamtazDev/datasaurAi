import React, { useEffect, useRef, useState } from "react";
import Prompt from "../components/Prompt/Prompt";
import Completions from "../components/Completions/Completions";
import PageTwoSubmitSection from "../components/SubmitSection/PageTwoSubmitSection";
// import DragComp from "../components/DragComponent/DragComp";

const pageTwoContent = [
  {
    id: 1,
    prompt: " Prompt1",
    completion: [
      { id: 1, text: "Completion11" },
      { id: 2, text: "Completion12" },
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
    console.log(allData, "gg");
  };

  useEffect(() => {
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
