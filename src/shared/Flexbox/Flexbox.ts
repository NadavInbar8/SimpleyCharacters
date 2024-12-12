import styled from "styled-components";
import { FlexboxProps } from "./interfaces";

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  ${(props) =>
    props.textA &&
    `
  		text-align: ${props.textA};
  `};
  ${(props) =>
    props.center &&
    `
		justify-content: center;
		align-items: center;
		margin: 0px auto;
	`};
  ${(props) =>
    props.$end &&
    `
		justify-content: flex-end;
	`};
  ${(props) =>
    props.$start &&
    `
		justify-content: flex-start;
	`};
  ${(props) =>
    props.middle &&
    `
		align-items: center;
	`};
  ${(props) =>
    props.width &&
    `
		max-width: ${props.width}px;
		width: 100%;
	`}
  ${(props) =>
    props.height &&
    `
		max-height: ${props.height}px;
		height: 100%;
	`}
	${(props) =>
    props.between &&
    `
		justify-content: space-between;
		align-items: center;`}
	${(props) =>
    props.bottom &&
    `
		align-items: flex-end;
	`};
  ${(props) =>
    props.margin &&
    `
		margin: ${props.margin}
	`}
  ${(props) =>
    props.marginV &&
    `
		margin-top: ${props.marginV}px;
		margin-bottom: ${props.marginV}px;
	`}
	${(props) =>
    props.marginT &&
    `
		margin-top: ${props.marginT}px;
	`}
	${(props) =>
    props.marginB &&
    `
		margin-bottom: ${props.marginB}px;
	`}
	${(props) =>
    props.marginL &&
    `
		margin-left: ${props.marginL}px;
	`}
	${(props) =>
    props.marginR &&
    `
		margin-right: ${props.marginR}px;
	`}
	${(props) =>
    props.toWrap &&
    `
		flex-wrap: wrap;
	`}
	${(props) =>
    props.column &&
    `
		flex-direction: column;
	`}
	${(props) =>
    props.reverse &&
    `
		flex-direction: ${props.column ? "column" : "row"}-reverse;
	`}
	${(props) =>
    props.flex &&
    `
		flex: ${props.flex};
	`}
	${(props) =>
    props.baseline &&
    `
		align-items: baseline;
	`}
	${(props) =>
    props.gridGap &&
    `
		grid-gap: ${props.gridGap};
	`}
`;
