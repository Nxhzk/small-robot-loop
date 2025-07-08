import { useMemo } from 'react';
import styles from './index.module.scss';
import { motion } from "framer-motion"
import { useGetEmojiAnimationFrames, useEmoState } from './hooks'

function Eye() {
    const { emoInfo, setEmoState } = useGetEmojiAnimationFrames();
    useEmoState(setEmoState);

    // 是否是双眼分别控制
    const isEyeControl = useMemo(() => {
        let isEyeControl = false;

        if (Array.isArray(emoInfo.style)) {
            isEyeControl = true;
        }
        return isEyeControl
    }, [emoInfo]);

    return (
        <motion.div className={styles.eye}>
            <div className={styles.eye_left} >
                <div
                    style={{
                        ...isEyeControl ?
                            emoInfo.style[0] :
                            emoInfo.style, transition: `all ${emoInfo.duration}s ease-in-out`
                    }}
                    className={styles.eyeBall}
                />
            </div>
            <div className={styles.eye_right} >
                <div
                    style={{
                        ...isEyeControl ?
                            { ...emoInfo.style[0], ...emoInfo.style[1] } :
                            emoInfo.style, transition: `all ${emoInfo.duration}s ease-in-out`
                    }}
                    className={styles.eyeBall}
                />
            </div>
        </motion.div>
    );
}

export default Eye;

