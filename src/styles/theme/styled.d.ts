import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      text: string;
      highlightedText: string;
      background: string;
      card: string;
      white: string;
      danger: string;
    };
    shadow: string;
    transition: string;
  }
}
