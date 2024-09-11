"use client";
import React from "react";
import { Button } from "../ui/moving-border";

interface Props {
    buttonText : string
}

const MovingBorderButton : React.FC<Props> = (  { buttonText}) => {
  return (
    <Button
     borderRadius="4px"
      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 text-base py-2 px-4 dark:border-slate-800"
    >
        {buttonText}
    </Button>
  );
};

export default MovingBorderButton;
