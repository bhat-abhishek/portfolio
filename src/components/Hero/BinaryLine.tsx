"use client";
import React from "react";
interface Props {
  animationDelay: string;
}
const BinaryLine: React.FC<Props> = ({ animationDelay }) => {
  return (
    <div className="flex select-none flex-col items-center justify-center whitespace-nowrap text-7xl">
      <p
        style={
          { "--animation-delay": animationDelay, "--opacity-val": 0.2 } as any
        }
        className={`binary`}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary`}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        &Mu;
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        &Mu;
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary`}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>{" "}
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>{" "}
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        1
      </p>
      <p
        style={{ "--animation-delay": animationDelay } as any}
        className={`binary `}
      >
        0
      </p>
    </div>
  );
};

export default BinaryLine;
