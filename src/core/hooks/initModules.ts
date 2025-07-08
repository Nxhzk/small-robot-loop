import * as faceapi from "@vladmandic/face-api";

export const initModules = async () => {
  // 加载模型 用于检测人脸
  const baseUrl = import.meta.env.BASE_URL;
  const modelsPath = `${baseUrl}/public/models/`;

  await faceapi.nets.tinyFaceDetector.loadFromUri(modelsPath);
  // 加载模型 用于检测68个面部关键点
  await faceapi.nets.ssdMobilenetv1.loadFromUri(modelsPath);
  // 加载面部特征模型
  await faceapi.nets.faceLandmark68Net.loadFromUri(modelsPath);
  // 加载面部识别模型
  await faceapi.nets.faceExpressionNet.loadFromUri(modelsPath);
  // 加载年龄性别模型
  await faceapi.nets.ageGenderNet.loadFromUri(modelsPath);
  await faceapi.nets.faceRecognitionNet.loadFromUri(modelsPath);
  return true;
};
