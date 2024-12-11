import styled from 'styled-components';
import {Flexbox} from '../Flexbox';
import {MenuItem} from './MenuItem';

const Wrapper = styled(Flexbox)`
	width: 100%;
	box-sizing: border-box;
`;

export const MainMenu = () => {
	return (
		<Wrapper column>
			<MenuItem link='/'>Item 1</MenuItem>
			<MenuItem link='/2'>Item 2</MenuItem>
			<MenuItem link='/3'>Item 3</MenuItem>
		</Wrapper>
	);
};
