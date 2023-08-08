import styled from 'styled-components';

export const StyledConatiner = styled.div`
  padding: ${p => p.theme.space[4]}px;

  display: grid;
  grid-template-columns: auto;
  width: 100%;

  height: 100%;
  @media screen and (min-width: 1280px) {
    grid-template-columns: 4fr 2fr;
  }
`;

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
