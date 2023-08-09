import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledConatiner = styled.section`
  margin-top: ${p => p.theme.space[4]}px;
`;

export const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes[4]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
