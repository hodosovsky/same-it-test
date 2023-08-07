import { ErrorMessage } from 'formik';
import { StyledBox } from './FormError.styled';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <StyledBox>{message}</StyledBox>}
    />
  );
};
