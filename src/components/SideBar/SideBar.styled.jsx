import styled from 'styled-components';
import theme from 'theme/theme';

export const SideBarWrap = styled.div`
  border-top: ${p => p.theme.borders.primary} ${p => theme.colors.border};
  padding-top: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 1280px) {
    border-top: none;
    border-left: ${p => p.theme.borders.primary} ${p => theme.colors.border};
    padding: ${p => p.theme.space[3]}px;
  }
`;
