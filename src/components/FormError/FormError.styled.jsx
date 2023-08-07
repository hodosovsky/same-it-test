import styled from 'styled-components';
import Box from 'components/Box/Box';

export const StyledBox = styled(Box)`
  position: absolute;
  color: ${p => p.theme.colors.error};
  text-align: right;
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: calc(16 / 12);
  right: 25px;
  top: 50px;
`;
