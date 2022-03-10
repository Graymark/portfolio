import React from 'react'



const initialState = {
    data1: {},
    data2: {},
};

export default function AppReducer(state = initialState, action) {
    switch(action.type) {
        case 'ACTION_STRING': {
            const response = action.payload;
            return {...state, data1: response};
        }
        case 'ACTION_NUMBER': {
            const response = action.payload;
            return {...state, data2: response};
        }
        default:
            return state;
    }
}