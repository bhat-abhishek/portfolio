"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

interface props { 
    words : string
}
const TextGenerateEffectDemo : React.FC<props> = ({ words }) => {
  return <TextGenerateEffect words={words} />;
}

export default TextGenerateEffectDemo
