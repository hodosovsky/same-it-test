import { getDepartmentsAPI } from 'services/apiInvoices';
import { InfoWrap, Wrap, SubTitle, Text } from './CitiesList.styled';

const CitiesList = ({ cities, departments, setDepartments }) => {
  console.log('cities:', cities);
  return (
    <Wrap>
      {cities.map((city, indx) => (
        <InfoWrap
          key={indx}
          onClick={() => {
            getDepartmentsAPI(city.Ref).then(({ data }) =>
              setDepartments(data)
            );
          }}
        >
          <SubTitle> {indx + 1}.</SubTitle>{' '}
          <SubTitle>{city.Description} </SubTitle>
          <Text> {city.AreaDescription} область</Text>
        </InfoWrap>
      ))}
    </Wrap>
  );
};

export default CitiesList;
