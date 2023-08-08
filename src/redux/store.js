import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { invoicesReducer } from './invoices/invoices.slice';
import persistReducer from 'redux-persist/es/persistReducer';

const invoicesPersistConfig = {
  key: 'invoices',
  storage,
  whitelist: ['invoicesNumberList'],
};

export const store = configureStore({
  reducer: {
    invoices: persistReducer(invoicesPersistConfig, invoicesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'your/action/type',
        ],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),

  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
