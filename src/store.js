import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './redux/greetingSlice';

const store = configureStore({
    reducer: {
        greeting: greetingReducer,
    },
});

export default store;