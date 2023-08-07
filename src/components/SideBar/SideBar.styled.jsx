import styled from 'styled-components';
import theme from 'theme/theme';

export const SideBarWrap = styled.div`
  border-left: ${p => p.theme.borders.primary} ${p => theme.colors.border};
  padding: ${p => p.theme.space[2]}px;
`;
