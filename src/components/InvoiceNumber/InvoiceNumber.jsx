import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  StyledButton,
  StyledList,
  StyledNumber,
  NumberWrap,
} from './InvoiceNumber.styled';
import { useSearchParams } from 'react-router-dom';
import { deleteNumberAction } from 'redux/invoices/invoices.slice';

const InvoiceNumber = ({ number }) => {
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNumberAction(number));
  };

  const handleClick = () => {
    setSearchParams(number ? { search: number } : {});
  };

  return (
    <StyledList>
      <NumberWrap onClick={handleClick}>
        <StyledNumber>{number}</StyledNumber>
      </NumberWrap>
      <StyledButton onClick={handleDelete}>Видалити</StyledButton>
    </StyledList>
  );
};

InvoiceNumber.propTypes = {
  number: PropTypes.string.isRequired,
};

export default InvoiceNumber;
