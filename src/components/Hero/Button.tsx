"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";
interface Props {
    buttonText : string
}

const MovingBorderButton : React.FC<Props> = (  { buttonText}) => {
  return (
    <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 rounded-sm text-base py-2 px-4 dark:border-slate-800">
      <Link href={'#skills'}>{buttonText}</Link>
    </Button>
  );
};

export default MovingBorderButton;
