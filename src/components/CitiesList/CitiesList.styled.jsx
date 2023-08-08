import styled from 'styled-components';

export const Wrap = styled.ul`
  background-color: ${p => p.theme.colors.modalBg};
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;
`;

export const InfoWrap = styled.li`
  padding: ${p => p.theme.fontSizes[2]}px;
  display: flex;
  align-items: baseline;
  color: ${p => p.theme.colors.textP};
  border-radius: ${p => p.theme.radii.max};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.btnHover};
    background-color: ${p => p.theme.colors.textP};
  }

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;
export const SubTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;
