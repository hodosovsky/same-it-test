import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: ${p => p.theme.colors.modalBg};
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const TextWrap = styled.div``;

export const InfoWrap = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes[4]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const SubTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const City = styled.p`
  margin-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
