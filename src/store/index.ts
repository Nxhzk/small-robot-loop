import { configureStore } from '@reduxjs/toolkit'

const initialState: IState = {
    robotsName: "loop",
    eyeImageInfo: {},
    faceDetections: []
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                ...action.payload
            }
        case 'RESET_STATE':
            return initialState;
        default:
            break;
    }

    return state;
};

const store = configureStore({
    reducer
});

export default store;

export interface IState {
    robotsName: 'loop';
    eyeImageInfo: {
        image?: string;
    },
    faceDetections: any[];
}