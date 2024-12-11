import {css} from 'styled-components';

export const Scrollbars = css`
	padding-right: 8px;
	/* width */
	::-webkit-scrollbar {
		width: 8px;
		margin-right: -8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: none;
		outline: none;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background: ${({theme}) => theme.colors.grey1};
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${({theme}) => theme.colors.grey2};
	}
`;

export const ScrollbarsSmall = css`
	padding-right: 4px;
	/* width */
	::-webkit-scrollbar {
		width: 4px;
		margin-right: -4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: none;
		outline: none;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background: ${({theme}) => theme.colors.grey1};
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${({theme}) => theme.colors.grey2};
	}
`;
