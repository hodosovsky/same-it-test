import { createAsyncThunk } from '@reduxjs/toolkit';
import { getInvoiceAPI } from 'services/apiInvoices';

export const getInvoices = createAsyncThunk(
  'invoices/getInvoices',
  async (value, thunkAPI) => {
    try {
      const { data } = await getInvoiceAPI(value);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
