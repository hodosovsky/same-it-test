import Box from 'components/Box';

import {
  Wrap,
  TextWrap,
  Title,
  SubTitle,
  Text,
  City,
} from './InvoiceCard.styled';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from 'redux/selectors';
import Spinner from 'components/Spinner/Spinner';

const InvoiceCard = ({ invoice }) => {
  console.log('invoice:', invoice);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const {
    Status: status,
    DateCreated: dateCreated,
    CitySender: citySender,
    WarehouseSender: wareHouseSender,
    RecipientDateTime: recipientDateTime,
    Number: number,
    CityRecipient: cityRecipient,
    WarehouseRecipient: warehouseRecipient,
  } = invoice;
  return (
    <Box display="flex" justifyContent="center">
      {!isLoading & !error && (
        <Wrap>
          <Box display="flex">
            {status !== 'Номер не найден' ? (
              <TextWrap>
                <Title>Інформація по ТТН: {number}</Title>
                <SubTitle>Статус доставки: {status}</SubTitle>
                <SubTitle>ВІдправлено: {dateCreated}</SubTitle>

                <Box display="flex" flexWrap="wrap" alignItems="center">
                  <City>з {citySender}</City>
                  <Text>{wareHouseSender}</Text>
                </Box>

                <SubTitle>Отримано: {recipientDateTime}</SubTitle>

                <Box display="flex" flexWrap="wrap" alignItems="center">
                  <City>в {cityRecipient}</City>
                  <Text>{warehouseRecipient}</Text>
                </Box>
              </TextWrap>
            ) : (
              <TextWrap>
                <Title>Інформація по ТТН: {number}</Title>
                <SubTitle>{status}</SubTitle>
              </TextWrap>
            )}
          </Box>
        </Wrap>
      )}
      {isLoading && <Spinner />}
      {error && <h1> {error}</h1>}
    </Box>
  );
};

export default InvoiceCard;
