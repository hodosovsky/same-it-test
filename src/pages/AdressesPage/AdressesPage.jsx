import Box from 'components/Box/Box';
import {
  StyledConatiner,
  StyledFormContainer,
  StyledInfoContainer,
  Title,
} from './AdressesPage.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import { object, string } from 'yup';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCitiesAPI } from 'services/apiInvoices';
import CitiesList from 'components/CitiesList/CitiesList';

const placeholderMsg = 'Введіть назву міста';
const onChangeActions = true;

const schema = object({
  query: string(),
});

const AdressesPage = () => {
  const [cities, setCities] = useState(false);
  const [departments, setDepartments] = useState(false);
  console.log('departments:', departments);

  const [searchParams] = useSearchParams();

  const search = searchParams.get('search' ?? '');

  useEffect(() => {
    if (search) {
      getCitiesAPI(search).then(res => setCities(res.data));
    }
  }, [search]);

  return (
    <>
      <StyledConatiner>
        <StyledFormContainer>
          <SearchForm
            schema={schema}
            placeholderMsg={placeholderMsg}
            onChangeActions={onChangeActions}
          />
        </StyledFormContainer>

        <StyledInfoContainer>
          <Box>
            <Title>Список знайдених міст:</Title>
            {cities && (
              <CitiesList
                cities={cities}
                departments={departments}
                setDepartments={setDepartments}
              />
            )}
            {!cities && <Title>за Вашим запитом нічого не знайдено</Title>}
          </Box>
          <Box>sgfsgfsdgdf</Box>
        </StyledInfoContainer>
      </StyledConatiner>
    </>
  );
};

export default AdressesPage;
