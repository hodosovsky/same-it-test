import styled from 'styled-components';

export const Wrap = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.modalBg};
  width: 750px;
`;

export const TextWrap = styled.div`
  padding: ${p => p.theme.space[2]}px;
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const SubTitle = styled.h3`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const City = styled.p`
  margin-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
`;
