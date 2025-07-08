import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export const useEmoState = (setEmoState: (state: string) => void) => {
  const { faceDetections } = useSelector((state: any) => state);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (faceDetections?.length) {
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
        delayTimerRef.current = null;
      }

      if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          (window as any).faceDetections = faceDetections;
          setEmoState("gazeAt");
          timerRef.current = null;
        }, 1000);
      }
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      if (!delayTimerRef.current) {
        delayTimerRef.current = setTimeout(() => {
          setEmoState("default");
          delayTimerRef.current = null;
        }, 1000);
      }
    }
  }, [faceDetections, setEmoState]);
};
