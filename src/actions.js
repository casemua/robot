import { SET_DIRECTION, SET_MOVE } from "./constants";

export const setDirection = (robotDirection, rotation) => {
  return {
    type: SET_DIRECTION,
    robotDirection,
    rotation
  };
};

export const setMove = (topCo, leftCo) => {
  return {
    type: SET_MOVE,
    topCo,
    leftCo
  };
};

export const sendLog = item => {
  return async dispatch => {
    try {
      await fetch("https://test.interaktiv.sg/robot-test/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "test-robot-interaktiv",
          email: "yonatanwidjojo@gmail.com"
        },
        body: JSON.stringify({
          action: "PLACE",
          value: item,
          creator: "yonatanwidjojo@gmail.com"
        })
      });
    } catch (e) {
      console.log(e);
    }
  };
};
