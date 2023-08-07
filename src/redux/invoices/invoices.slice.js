import { createSlice } from '@reduxjs/toolkit';
import { getInvoices } from './operations';

const initialState = {
  invoices: [],
  isLoading: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getInvoices.pending, handlePending)
      .addCase(getInvoices.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        console.log('state.invoices', state.invoices);

        if (action?.payload[0]?.Status === 'Номер не найден') {
          state.invoices = [...state.invoices];
        } else if (state?.invoices?.includes(action?.payload[0]?.Number)) {
          state.invoices = [...state.invoices];
        } else {
          state.invoices = [action?.payload[0]?.Number, ...state.invoices];
        }

        state.isLoading = false;
      })
      .addCase(getInvoices.rejected, handleRejected);
  },
});

export const invoicesReducer = invoicesSlice.reducer;
