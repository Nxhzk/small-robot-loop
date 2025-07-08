import { useEffect } from "react";
import * as faceapi from "@vladmandic/face-api";
import { useDispatch } from "react-redux";
import { initModules } from './initModules';
import { initMedia } from './initMedia';
import type { initMediaOnMessage, InitMediaData } from './initMedia';

const handleImage = async (eyeImageInfo: InitMediaData, success: boolean, dispatch: any) => {
    if (!success) return;
    const { canvas } = eyeImageInfo;
    const detections: any = await faceapi
        .detectAllFaces(canvas, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender();

    // 处理人脸数据
    const faceDetections = detections.map((faceInfo: any) => {
        const { detection } = faceInfo;
        const { _box, _imageDims } = detection;
        return {
            // 人脸框
            faceBox: {
                ..._box,
                imageInfo: {
                    ..._imageDims
                }
            }
        }
    });
    // 绘制人脸框
    const resizedDetections = faceapi.resizeResults(detections, {
        width: canvas.width,
        height: canvas.height
    });
    // 绘制人脸框
    faceapi.draw.drawDetections(canvas, resizedDetections);
    // 绘制人脸特征点
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    // 绘制人脸表情
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    dispatch({
        type: 'SET_STATE',
        payload: {
            faceDetections
        }
    })
}

const init = async (dispatch: any) => {
    // 初始化视觉模型
    const success = await initModules();
    const onmessage: initMediaOnMessage = (data: InitMediaData) => {
        handleImage(data, success, dispatch);
    }
    // 初始化视频和画布元素
    initMedia(onmessage);
    dispatch({
        type: 'SET_STATE',
        payload: {
            modelsDone: success
        }
    })
}
export const useEyeInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        init(dispatch);
    }, []);
};
