import { getDepartmentsAPI } from 'services/apiInvoices';
import {
  InfoWrap,
  Wrap,
  SubTitle,
  Text,
  DepartmentName,
  DepartmentList,
  StyledButton,
  ButtonWrap,
} from './CitiesList.styled';
import { useState } from 'react';
import Box from 'components/Box/Box';

const CitiesList = ({ cities }) => {
  const [departments, setDepartments] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <Wrap>
      <SubTitle>Оберіть населений пункт</SubTitle>
      {cities.map((city, indx) => (
        <InfoWrap key={city.CityID}>
          <Box
            onClick={() => {
              setPage(1);
              getDepartmentsAPI(city.Ref).then(({ data }) => {
                setDepartments(data);
              });
              setPage(prev => prev + 1);
            }}
          >
            <SubTitle>
              {indx + 1}. {city.SettlementTypeDescription} {city.Description}{' '}
            </SubTitle>
            <Text> {city.AreaDescription} область</Text>
          </Box>

          {departments.length !== 0 && (
            <Box>
              <DepartmentList>
                {city.Description === departments[0]?.CityDescription &&
                  departments?.map(item => (
                    <li key={item.SiteKey}>
                      <DepartmentName>{item.Description}</DepartmentName>
                    </li>
                  ))}
              </DepartmentList>
              {city.Description === departments[0]?.CityDescription &&
                departments.length % 20 === 0 && (
                  <ButtonWrap>
                    <StyledButton
                      type="button"
                      onClick={() => {
                        getDepartmentsAPI(city.Ref, page).then(({ data }) => {
                          setDepartments(prev => [...prev, ...data]);
                        });
                        setPage(prev => prev + 1);
                      }}
                    >
                      load more
                    </StyledButton>
                  </ButtonWrap>
                )}
            </Box>
          )}
        </InfoWrap>
      ))}
    </Wrap>
  );
};

export default CitiesList;
