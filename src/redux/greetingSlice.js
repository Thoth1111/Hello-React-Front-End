import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async() => {
  const response = await fetch('');
  const data = await response.json();
  return data;  
});

const initialState = {
    greeting: '',
    loading: false,
    error: null,
};

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGreeting.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchGreeting.fulfilled, (state, action) => {
            state.loading = false;
            state.greeting = action.payload;
        })
        .addCase(fetchGreeting.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const selectGreeting = (state) => state.greeting.greeting.message;

export default greetingSlice.reducer;