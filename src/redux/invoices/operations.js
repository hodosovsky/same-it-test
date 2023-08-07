import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { getInvoiceAPI } from 'services/apiInvoices';

export const getInvoices = createAsyncThunk(
  'invoices/getInvoices',
  async (value, thunkAPI) => {
    try {
      const { data } = await getInvoiceAPI(value);

      if (data[0].Status === 'Номер не найден') {
        Notify.failure('Declaration Not Found');
        console.log('data:', data);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
