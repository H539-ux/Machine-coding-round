import React from "react";
import { useEffect, useState, useCallback } from "react";

const useProgress = ({ speed = 100 }) => {
  const [value, setValue] = useState(0);
  const [isPause, setIsPause] = useState(false);
  useEffect(() => {
    if (!isPause) {
      const timer = setInterval(() => {
        setValue((prev) => Math.min(100, prev + 1));
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isPause]);

  const handlePause = useCallback(() => setIsPause(true), []);
  const handleResume = useCallback(() => setIsPause(false), []);
  const handleRestart = useCallback(() => {
    setValue(0);
    setIsPause(false);
    document.querySelector('.runner').style.transition = 'none';
    setTimeout(() => {
      document.querySelector('.runner').style.transition = '';
    }, 10);
  }, []);

  return { handlePause, handleResume, handleRestart, value };
};

export default useProgress;
