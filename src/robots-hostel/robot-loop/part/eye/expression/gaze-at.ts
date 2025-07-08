import { openEyes } from "./default";

const getXYFace = () => {
  const mobileThreshold = -150;
  const detection = (window as any).faceDetections?.[0];
  const { _y, _x, _width, _height, imageInfo } = detection.faceBox;
  imageInfo._width;
  imageInfo._height;
  const top = _y + _height / 2;
  const left = _x + _width / 2;
  // 根据人脸位置计算眼睛位置
  const xp = 0.5 - left / imageInfo._width;
  const yp = 0.5 - top / imageInfo._height;

  const smallEye = {
    width: 80,
    height: 80,
  };
  const largeEye = {
    width: 100,
    height: 100,
  };

  const leftEye = xp < 0.1 ? largeEye : smallEye;
  const rightEye = xp > -0.1 ? largeEye : smallEye;

  return {
    top: mobileThreshold * yp,
    left: mobileThreshold * xp,
    leftEye,
    rightEye,
  };
};

export const gaze = () => {
  const { top, left, leftEye, rightEye } = getXYFace();

  return {
    style: [
      {
        ...leftEye,
        borderRadius: 50,
        backgroundColor: "#fff",
        border: "1px solid #000",
        position: "relative",
        top,
        left,
      },
      {
        ...rightEye,
      },
    ],
    timer: 3000,
    duration: 0.1,
  };
};

export const closeEyes = () => {
  const { top, left } = getXYFace();

  return {
    style: {
      width: 200,
      height: Math.random() * 2,
      borderRadius: 50,
      boxShadow:
        "-5px 5px 5px 0px rgb(87, 199, 133), -5px -5px 5px 0px rgb(87, 199, 133), -15px 0px 5px rgb(87, 199, 133)",
      top,
      left,
    },
    timer: 100,
    duration: 0.05,
  };
};

export default {
  animation: [gaze, closeEyes, openEyes],
  isRandom: true,
};
