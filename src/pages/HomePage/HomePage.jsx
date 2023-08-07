import SideBar from 'components/SideBar/SideBar';
import { StyledConatiner } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getInvoices } from 'redux/invoices/operations';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices('59000982107259'));
  }, [dispatch]);

  return (
    <StyledConatiner>
      Home Page <SideBar />
    </StyledConatiner>
  );
};

export default HomePage;
