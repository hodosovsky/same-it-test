export const selectInvoicesNumberList = store =>
  store.invoices.invoicesNumberList;

export const selectIsLoading = store => store.invoices.isLoading;

export const selectIsError = store => store.invoices.error;

export const selectInvoice = store => store.invoices.invoice;
