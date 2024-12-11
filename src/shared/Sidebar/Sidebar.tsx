import {Flexbox} from '../Flexbox';
import styled from 'styled-components';
import {MainMenu} from './MainMenu';

const Logo = styled.div`
	margin-bottom: ${({theme}) => theme.spaces8[5]};
	padding-left: ${({theme}) => theme.spaces8[2]};
	font-size: ${({theme}) => theme.fonts.big};
`;

const Wrapper = styled(Flexbox)`
	background-color: ${({theme}) => theme.colors.blue7};
	border-right: 1px solid ${({theme}) => theme.colors.grey2};
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.17);
	box-sizing: border-box;
	flex: 1;
	font-size: ${({theme}) => theme.fonts.normal};
	max-width: 278px;
	padding: ${({theme}) => theme.spaces8[3]} ${({theme}) => theme.spaces8[2]};
	width: 278px;
`;

export const Sidebar = () => {
	return (
		<Wrapper column={true}>
			<Logo>Simple Characters</Logo>
			<MainMenu />
		</Wrapper>
	);
};
