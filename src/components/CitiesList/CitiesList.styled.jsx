import styled from 'styled-components';

export const Wrap = styled.ul`
  background-color: ${p => p.theme.colors.modalBg};
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;
`;

export const InfoWrap = styled.li`
  padding-left: ${p => p.theme.fontSizes[2]}px;
  padding-right: ${p => p.theme.fontSizes[2]}px;
  margin-bottom: ${p => p.theme.fontSizes[1]}px;
  border: ${p => p.theme.borders.primary} ${p => p.theme.colors.textP};
  color: ${p => p.theme.colors.textP};
  border-radius: ${p => p.theme.radii.max};
  cursor: pointer;
`;

export const DepartmentList = styled.ul`
  margin-bottom: ${p => p.theme.fontSizes[2]}px;
  :nth-child(even) {
    border-top: ${p => p.theme.borders.primary} ${p => p.theme.colors.textP};
    border-bottom: ${p => p.theme.borders.primary} ${p => p.theme.colors.textP};
    background-color: ${p => p.theme.colors.white};
  }
`;

export const SubTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const DepartmentName = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;
