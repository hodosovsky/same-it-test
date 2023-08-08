import { createSlice } from '@reduxjs/toolkit';
import { getInvoices } from './operations';

const initialState = {
  invoicesNumberList: [],
  invoice: {},
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
  name: 'invoicesNumberList',
  initialState,
  reducers: {
    deleteNumberAction: (state, action) => {
      state.invoicesNumberList = state.invoicesNumberList.filter(
        el => el !== action.payload
      );
    },
    deleteAllNumbersAction: (state, action) => {
      state.invoicesNumberList = initialState.invoicesNumberList;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getInvoices.pending, handlePending)
      .addCase(getInvoices.fulfilled, (state, action) => {
        if (!action?.payload.length) {
          state.invoicesNumberList = [...state.invoicesNumberList];
        } else if (action?.payload[0]?.Status === 'Номер не найден') {
          state.invoicesNumberList = [...state.invoicesNumberList];
        } else if (
          state?.invoicesNumberList?.includes(action?.payload[0]?.Number)
        ) {
          state.invoicesNumberList = [...state.invoicesNumberList];
        } else {
          state.invoicesNumberList = [
            action?.payload[0]?.Number,
            ...state.invoicesNumberList,
          ];
        }
        state.invoice = action?.payload[0];
        state.isLoading = false;
      })
      .addCase(getInvoices.rejected, handleRejected);
  },
});

export const invoicesReducer = invoicesSlice.reducer;

export const { deleteNumberAction, deleteAllNumbersAction } =
  invoicesSlice.actions;
