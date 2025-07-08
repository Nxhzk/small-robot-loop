import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react';

export const useEmoState = (setEmoState: any) => {
    const { faceDetections } = useSelector((state: any) => state);
    const timer = useRef<any>(null);
    const dtimer = useRef<any>(null);

    useEffect(() => {
        if (faceDetections.length) {
            clearTimeout(dtimer.current);
            timer.current = setTimeout(() => {
                (window as any).faceDetections = faceDetections;
                setEmoState('gazeAt');
            }, 3000);
        } else {
            clearTimeout(timer.current);
            dtimer.current = setTimeout(() => {
                setEmoState('default');
            }, 3000);
         
        }
    }, [faceDetections]);
}