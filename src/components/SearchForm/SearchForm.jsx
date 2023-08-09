import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
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

const styleError = {
  border: '1px solid #ff2b77',
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
    e.preventDefault();
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
      {({ isValid, values, error, touched }) => (
        <StyledForm autoComplete="off" onChange={handleChange}>
          <StyledLabel>
            <Field name="query">
              {({ field, form }) => (
                <StyledField
                  style={form.touched.query && form.errors.query && styleError}
                  {...field}
                  type="text"
                  placeholder={placeholderMsg}
                />
              )}
            </Field>

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

SearchForm.propTypes = {
  schema: PropTypes.shape({
    query: PropTypes.object,
  }),
  placeholderMsg: PropTypes.string.isRequired,
  onChangeActions: PropTypes.bool.isRequired,
};

export default SearchForm;
