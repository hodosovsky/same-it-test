import Box from 'components/Box';
import {
  Wrap,
  TextWrap,
  Title,
  SubTitle,
  Text,
  City,
  InfoWrap,
} from './InvoiceCard.styled';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from 'redux/selectors';
import Spinner from 'components/Spinner/Spinner';
import translateUa from 'helpers/translateUa';

const InvoiceCard = ({ invoice }) => {
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
    <>
      {!isLoading & !error && (
        <Box>
          <Wrap>
            <Box display="flex">
              {status !== 'Номер не найден' ? (
                <TextWrap>
                  <InfoWrap>
                    <Title>Інформація по ТТН: </Title>
                    <Text>{number}</Text>
                  </InfoWrap>
                  <InfoWrap>
                    <SubTitle>Статус доставки:</SubTitle>
                    <Text> {status}</Text>
                  </InfoWrap>
                  <InfoWrap>
                    <SubTitle>ВІдправлено: </SubTitle>
                    <Text>{dateCreated}</Text>
                  </InfoWrap>

                  <InfoWrap>
                    <City>з {citySender}</City>
                    <Text>{wareHouseSender}</Text>
                  </InfoWrap>

                  <InfoWrap>
                    <SubTitle>Отримано: </SubTitle>
                    <Text>{recipientDateTime}</Text>
                  </InfoWrap>

                  <InfoWrap>
                    <City>в {cityRecipient}</City>
                    <Text>{warehouseRecipient}</Text>
                  </InfoWrap>
                </TextWrap>
              ) : (
                <TextWrap>
                  <Title>Інформація по ТТН: {number}</Title>
                  <SubTitle>{translateUa(status)}</SubTitle>
                </TextWrap>
              )}
            </Box>
          </Wrap>

          {isLoading && <Spinner />}
          {error && <h1> {error}</h1>}
        </Box>
      )}
    </>
  );
};

export default InvoiceCard;
