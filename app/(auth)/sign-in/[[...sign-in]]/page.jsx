import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="m-28 mb-10">
      {" "}
      <SignIn />
    </div>
  );
};

export default Page;
