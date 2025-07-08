import { useMemo, useEffect, useRef, useState } from "react";
import emoMap from '../expression';
/**
 * 播放引擎
*/
export function useGetEmojiAnimationFrames() {
    const [emoState, setEmoState] = useState<any>('default');
    const [animationFrames, setAnimationFrames] = useState<any>(0);
    const timer = useRef<any>(null);

    useEffect(() => {
        setAnimationFrames(0);
    }, [emoState]);

    useEffect(() => {
        (window as any).setEmo = (state: any) => {
            setEmoState(state);
        };
    }, []);

    useEffect(() => {
        const emo = emoMap[emoState];
        const emoInState: any = emo.animation;
        const emoInfo = emoInState[animationFrames]();

        timer.current = setTimeout(() => {
            if (emo.isRandom) {
                // 随机播放
                const exclusiveEmo = emoInState.map((item: any, index: number) => index).filter((item: number) => item !== animationFrames);
                const random = exclusiveEmo[Math.floor(Math.random() * exclusiveEmo.length)];
                setAnimationFrames(random || 0);
            } else {
                // 按顺序播放
                if (animationFrames === emoInState.length - 1) {
                    setAnimationFrames(0);
                    return;
                }
                setAnimationFrames(animationFrames + 1);
            }
        }, emoInfo.timer);

        return () => {
            clearInterval(timer.current);
        };
    }, [animationFrames, emoState]);

    const emoInState = emoMap[emoState].animation;
    const emoInfo = useMemo(() => emoInState[animationFrames](), [emoInState, animationFrames]);

    return {
        emoInfo,
        emoInState,
        emo: emoMap[emoState],
        setEmoState
    }
}