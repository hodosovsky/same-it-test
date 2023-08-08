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
import { useEffect } from 'react';
import useDebounce from 'react-debounced';

const initialValues = {
  query: '',
};

const SearchForm = ({ schema, placeholderMsg, onChangeActions }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const debounce = useDebounce(500);

  const search = searchParams.get('search' ?? '');

  useEffect(() => {
    if (search === '') {
      return;
    }
  }, [search]);

  const handleChange = e => {
    if (onChangeActions) {
      debounce(() => {
        setSearchParams(
          e.target.value.toLowerCase().trim() !== ''
            ? { search: e.target.value.toLowerCase().trim() }
            : {}
        );
      });
    }
  };

  const handleSubmit = async ({ query }, { resetForm }) => {
    setSearchParams(query !== '' ? { search: query } : {});
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ isValid }) => (
        <StyledForm autoComplete="off" onChange={handleChange}>
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
