import SideBar from 'components/SideBar/SideBar';
import { StyledConatiner } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { object, string } from 'yup';
import { getInvoices } from 'redux/invoices/operations';
import SearchForm from 'components/SearchForm/SearchForm';

const schema = object({
  query: string('Please enter Number')
    .matches(/^(\d){1,14}$/g, 'Please enter valid number.')
    .min(14, 'Number must contain 14 digits')
    .max(14, 'Number must contain 14 digits')
    .required('Number is required'),
});

const placeholderMsg = 'Enter the declaration number';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery !== '') {
      dispatch(getInvoices(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <StyledConatiner>
      <SearchForm
        schema={schema}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholderMsg={placeholderMsg}
      />
      <SideBar />
    </StyledConatiner>
  );
};

export default HomePage;
