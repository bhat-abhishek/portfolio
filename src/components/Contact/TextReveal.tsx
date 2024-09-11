"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

const TextRevealCardPreview = () => {
  return (
    <TextRevealCard
      text="You know the business"
      revealText="I know the Technology"
    ></TextRevealCard>
  );
};

export default TextRevealCardPreview;
