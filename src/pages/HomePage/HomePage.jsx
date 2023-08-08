import SideBar from 'components/SideBar/SideBar';
import { StyledConatiner, StyledFormContainer } from './HomePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { object, string } from 'yup';
import { getInvoices } from 'redux/invoices/operations';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { selectInvoice, selectIsLoading } from 'redux/selectors';
import Box from 'components/Box/Box';

import InvoiceCard from 'components/InvoiceCard/InvoiceCard';

const schema = object({
  query: string('Please enter Number')
    .matches(/^(\d){1,14}$/g, 'Please enter valid number.')
    .min(14, 'Number must contain 14 digits')
    .max(14, 'Number must contain 14 digits')
    .required('Number is required'),
});

const placeholderMsg = 'Введіть номер ТТН';
const onChangeActions = false;

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const isLoading = useSelector(selectIsLoading);
  const invoice = useSelector(selectInvoice);

  const search = searchParams.get('search' ?? '');

  const dispatch = useDispatch();

  useEffect(() => {
    if (search) {
      dispatch(getInvoices(search));
    }
  }, [dispatch, search]);

  return (
    <StyledConatiner as="section">
      <Box>
        <StyledFormContainer>
          <SearchForm
            schema={schema}
            placeholderMsg={placeholderMsg}
            onChangeActions={onChangeActions}
          />
        </StyledFormContainer>

        {invoice?.Status && !isLoading && <InvoiceCard invoice={invoice} />}
      </Box>
      <SideBar />
    </StyledConatiner>
  );
};

export default HomePage;
