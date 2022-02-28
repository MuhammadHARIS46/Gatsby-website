import styled, { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"
export const GlobalStyles = createGlobalStyle`
 background: ${themes.light.backgroundColor};
 @media screen {
     background: ${themes.dark.backgroundColor};
 }
`
