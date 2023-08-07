import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 30px;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  height: 80px;
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  padding: ${p => p.theme.space[1]}px;

  width: 400px;
  margin-right: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.med};
  border-color: ${p => p.theme.colors.border};
  outline: none;
  background-color: ${p => p.theme.colors.btnBg};
  font-size: ${p => p.theme.fontSizes[3]}px;

  :placeholder {
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.textP};
  }

  /* &:not(:focus):not(:placeholder-shown):valid {
    border-color: ${p => p.theme.colors.hover};
  }

  &:not(:focus):not(:placeholder-shown):invalid {
    border-color: ${p => p.theme.colors.error};
  } */
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
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
`;
