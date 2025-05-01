import React from "react";
import ProgressBar from "./ProgressBar.js";
import "./ProgressBarHome.css";
import { useEffect, useState } from "react";
import useProgress from "./useProgress";
const ProgressBarHome = () => {
  const { handlePause, handleResume, handleRestart, value } = useProgress(100);

  return (
    <div>
      <ProgressBar
        value={value}
        onRestart={() => handleRestart()}
        onPause={() => handlePause()}
        onResume={() => handleResume()}
      />
    </div>
  );
};

export default ProgressBarHome;
