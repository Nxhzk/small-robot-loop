export const happyEyes = () => {
  return {
    style: {
      width: 120,
      height: 50,
      borderLeftRadius: 50,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      position: "relative",
      top: -0,
    },
    timer: 200,
    duration: 0.3,
  };
};

export const happyEyes2 = () => {
  return {
    style: {
      width: 130,
      height: 55,
      borderLeftRadius: 50,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      position: "relative",
      top: Math.random() * -5,
    },
    timer: 200,
    duration: 0.3,
  };
};

export default {
  animation: [happyEyes, happyEyes2],
};
