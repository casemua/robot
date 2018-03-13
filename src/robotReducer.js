import { SET_DIRECTION, SET_MOVE } from "./constants";

const initialDirection = {
  robotDirection: 2,
  rotation: 90
};

const initialPosition = {
  topCo: 580,
  leftCo: -250
};

export const direction = (state = initialDirection, action) => {
  switch (action.type) {
    case SET_DIRECTION:
      return {
        robotDirection: state.robotDirection + action.robotDirection,
        rotation: state.rotation + action.rotation
      };
    default:
      return state;
  }
};

export const forward = (state = initialPosition, action) => {
  switch (action.type) {
    case SET_MOVE:
      return {
        topCo: state.topCo + action.topCo,
        leftCo: state.leftCo + action.leftCo
      };
    default:
      return state;
  }
};
