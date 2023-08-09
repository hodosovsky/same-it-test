import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[4]}px;
  max-width: 300px;
  width: 100%;

  @media screen and (min-width: 480px) {
    grid-template-columns: auto auto;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  max-width: 240px;
  width: 100%;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.med};
  border-color: ${p => p.theme.colors.border};
  outline: none;
  background-color: ${p => p.theme.colors.btnBg};
  font-size: ${p => p.theme.fontSizes[3]}px;

  @media screen and (min-width: 480px) {
    width: 300px;
  }

  :placeholder {
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.textP};
  }
`;

export const FindBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  &:disabled svg {
    fill: ${p => p.theme.colors.border};
    color: ${p => p.theme.colors.disabled};
  }

  svg {
    transition: color 300ms ease-in-out;
    color: ${p => p.theme.colors.textP};
    transition: color 250ms linear;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
`;
