import { createGlobalStyle } from "styled-components";

const generateSpaces = (max, baseSpace) => {
  const spaces = {};
  for (let i = 1; i <= max; i++) {
    spaces[i] = `${i * baseSpace}px`;
  }
  return spaces;
};

export const theme = {
  smallScreenBreakPoint: "1700px",
  disabledColor: "#565b73",
  emptyResult: "rgba(255, 255, 255, 0.5)",
  cardSidePadding: "28px",
  wizard: {
    leftPadding: "28px",
    rightPaddingNoSkeleton: "28px",
    rightPaddingWithSkeleton: "28px",
  },
  fonts: {
    family: "'Maven Pro', sans-serif, Arial",
    small: "1.2rem",
    normal4: "1.4rem",
    normal: "1.6rem",
    normal8: "1.8rem",
    big: "2.4rem",
  },
  colors: {
    white: "#ffffff",
    black: "#000000",
    disabledLight: "rgba(255, 255, 255, 0.4)",
    headerGrey: "rgba(255,255,255,0.4)",
    hoverGrey: "rgba(255,255,255,0.1)",
    emptyResult: "rgba(255, 255, 255, 0.5)",
    warning: "#f9c236",
    warning2: "#675A4A",
    warning3: "#4B474E",
    error: "#f9366e",
    error2: "#71315C",
    error3: "#523058",
    success: "#3ed676",
    orange: "#FF9700",
    orange2: "#534342",
    orange3: "#483E47",
    primaryBlue: "#3f8dff",
    blue2: "#0068FF",
    blue3: "#274380",
    blue4: "#2d3768",
    blue5: "#24294A",
    blue6: "#1C234A",
    blue7: "#070e34",
    blue8: "#3B436D",
    grey1: "#7d8093",
    grey2: "#5a607c",
    grey3: "#373f67",
    grey4: "#31385B",
    primaryButtonGradient:
      "linear-gradient(209deg, #0351C9 -132.19%, #3F8DFF 100%)",
    primaryButtonGradientLight:
      "linear-gradient(180deg, #498BEE 0%, #5597F9 100%)",
    primaryButtonGradientDark:
      "linear-gradient(180deg, #205EBB 0%, #2D6AC6 100%)",
    activeBlueGradient:
      "linear-gradient(to left, rgba(3, 81, 201, 0), #3984f3)",
    skeletonGradient:
      "linear-gradient(to right, rgba(255, 255, 255, 0.2) 15%, rgba(255, 255, 255, 0.05) 125%)",
  },
  spaces8: generateSpaces(100, 8),
};

export const GlobalCSS = createGlobalStyle`
	html {
		font-size: 10px;
	}
	body {
		font-family: ${({ theme }) => theme.fonts.family};
		font-weight:300;
		padding: 0px;
		margin: 0px;
		::-webkit-scrollbar {
			width: 0px;
		}
	}
`;
