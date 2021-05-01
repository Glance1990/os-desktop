import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  h1 {
      color: ${({ theme }) => theme.colors.primary};
  }
`;
