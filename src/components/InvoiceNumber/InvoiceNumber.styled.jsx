import styled from 'styled-components';

export const StyledList = styled.li`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.fontSizes[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const NumberWrap = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const StyledNumber = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  justify-content: center;
  color: ${p => p.theme.colors.textP};
  background-color: ${p => p.theme.colors.bg};
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.secondary} ${p => p.theme.colors.textP};
  border-radius: ${p => p.theme.radii.max};
  cursor: pointer;
  outline: none;
  transition: border-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.hover};
  }
`;
