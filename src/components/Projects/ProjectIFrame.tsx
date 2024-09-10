import React from "react";

interface Props {
  projectSrc: string;
}
const ProjectIFrame: React.FC<Props> = ({ projectSrc }) => {
  return (
    <div className="cursor-pointer w-full h-full border-white">
      <iframe
        width={'100%'}
        height={'100%'}
        src={projectSrc}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ProjectIFrame;
