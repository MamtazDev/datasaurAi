import React from "react";
import Prompt from "../components/Prompt/Prompt";
import Completions from "../components/Completions/Completions";
import PageTwoSubmitSection from "../components/SubmitSection/PageTwoSubmitSection";
// import DragComp from "../components/DragComponent/DragComp";

const PageTwo = () => {
  return (
    <section className="relative h-full ">
      <Prompt />
      <Completions />
      <PageTwoSubmitSection />
      {/* <DragComp /> */}
    </section>
  );
};

export default PageTwo;
