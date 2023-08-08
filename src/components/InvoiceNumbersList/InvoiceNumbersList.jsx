import Box from 'components/Box/Box';
import InvoiceNumber from 'components/InvoiceNumber/InvoiceNumber';
import {
  DeleteButtonWrap,
  StyledButton,
  Title,
} from './InvoiceNumbersList.styled';
import { useDispatch } from 'react-redux';
import { deleteAllNumbersAction } from 'redux/invoices/invoices.slice';

const InvoiceNumbersList = ({ list }) => {
  const dispatch = useDispatch(deleteAllNumbersAction);
  const handleDeleteAll = () => {
    dispatch(deleteAllNumbersAction());
  };
  return (
    <Box>
      <Title>Історія пошукових запитів:</Title>
      <ul>
        {list?.map((item, idx) => (
          <InvoiceNumber key={item} number={item} />
        ))}
      </ul>
      {list.length !== 0 && (
        <DeleteButtonWrap>
          <StyledButton onClick={handleDeleteAll}>Видалити Всі</StyledButton>
        </DeleteButtonWrap>
      )}
    </Box>
  );
};

export default InvoiceNumbersList;
