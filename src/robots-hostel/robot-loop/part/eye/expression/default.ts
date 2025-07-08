export const openEyes = () => {
  return {
    style: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    timer: Math.random() * 3000 + 2000,
    duration: 0.1,
  };
};

export const closeEyes = () => {
  return {
    style: {
      width: 200,
      height: Math.random() * 2,
      borderRadius: 50,
      boxShadow:
        "-5px 5px 5px 0px rgb(87, 199, 133), -5px -5px 5px 0px rgb(87, 199, 133), -15px 0px 5px rgb(87, 199, 133)",
    },
    timer: 100,
    duration: 0.05,
  };
};

export const vibrate = () => {
  const vector = [1, -1];
  const index = Math.floor(Math.random() * vector.length);

  const top = Math.random() * 30 * vector[index];
  const left = Math.random() * 30 * vector[index];

  return {
    style: {
      width: 100,
      height: 100,
      borderRadius: 50,
      position: "relative",
      top,
      left,
    },
    timer: 1000,
    duration: 0.05,
  };
};

export default {
  animation: [openEyes, closeEyes, vibrate],
  isRandom: true,
  followFace: true,
};
