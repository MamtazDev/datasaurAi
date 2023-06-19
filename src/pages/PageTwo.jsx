import React, { useState } from "react";
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

  return (
    <section className="relative h-full ">
      <Prompt allData={allData} step={step} setStep={setStep} />
      <Completions allData={allData} step={step} />
      <PageTwoSubmitSection />
      {/* <DragComp /> */}
    </section>
  );
};

export default PageTwo;
