import { createGlobalStyle } from "styled-components";

const generateSpaces = (
  max: number,
  baseSpace: number
): Record<number, string> => {
  const spaces: Record<number, string> = {};
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
    // warning: "#f9c236",
    warning2: "#675A4A",
    warning3: "#4B474E",
    // error: "#f9366e",
    error2: "#71315C",
    error3: "#523058",
    success: "#3ed676",
    orange: "#FF9700",
    orange2: "#534342",
    orange3: "#483E47",
    parchment: "#FAF3E0", // Light parchment (text)
    parchmentLight: "#F5E9D8", // Slightly lighter parchment
    richBrown: "#91684A", // Rich brown for active links
    hoverBrown: "#4B3A2B", // Dark brown for hover state
    cardBackground: "#E0D7C6" /* Darker parchment for the card */,
    textPrimary: "#2D2A26" /* Charcoal black for text */,
    borderDark: "#7A6A5A" /* Dark brown border for contrast */,
    borderAccent: "#B28445" /* Golden accent for decorative borders */,
    burnishedGold: "#B28445" /* Hover for primary buttons */,
    goldAccent: "#B68E3A" /* Border/text for secondary buttons */,
    goldHover: "#4B3A2B" /* Hover for secondary buttons */,
    goldActive: "#6C5B4C" /* Active state */,
    greyMuted: "#A5A19B" /* Muted grey for disabled states */,
    greyLight: "#E0D7C6" /* Light grey for disabled buttons */,
    warning: "#B68E3A" /* Warning border and text */,
    warningHover: "#E8C77B" /* Hover for warning buttons */,
    warningActive: "#C5A05E" /* Active for warning buttons */,
    error: "#A23E48" /* Error border and text */,
    errorHover: "#C76A73" /* Hover for error buttons */,
    errorActive: "#923935" /* Active for error buttons */,
  },
  spaces8: generateSpaces(100, 8),
};

export const GlobalCSS = createGlobalStyle`
	html {
		font-size: 10px;
	}
	body {
    color: ${({ theme }) => theme.colors.white};
		font-family: ${({ theme }) => theme.fonts.family};
		font-weight:300;
		padding: 0px;
		margin: 0px;
		::-webkit-scrollbar {
			width: 0px;
		}
	}
`;
