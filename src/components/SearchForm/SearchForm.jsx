import { Formik } from 'formik';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom/dist';
import { FormError } from 'components/FormError/FormError';
import {
  FindBtn,
  StyledField,
  StyledForm,
  StyledLabel,
} from './SearchForm.styled';

const SearchForm = ({
  schema,
  searchQuery,
  setSearchQuery,
  placeholderMsg,
}) => {
  const [, setSearchParams] = useSearchParams();

  const initialValues = {
    query: '',
  };

  const handleSubmit = async ({ query }, { resetForm }) => {
    setSearchParams(query !== '' ? { search: query } : {});
    if (query !== '') {
      setSearchQuery(query);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ isValid }) => (
        <StyledForm autoComplete="off">
          <StyledLabel>
            <StyledField
              type="text"
              name="query"
              placeholder={placeholderMsg}
            />

            <FormError name="query" />
          </StyledLabel>

          <FindBtn type="submit" disabled={!isValid}>
            <HiOutlineSearchCircle size={40} />
          </FindBtn>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchForm;
