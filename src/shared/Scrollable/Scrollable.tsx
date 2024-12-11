import {useRef, useMemo} from 'react';
import styled from 'styled-components';
import {Flexbox} from '../Flexbox';
import {Scrollbars} from './Scrollbars';
import {useGetElementSize} from '../hooks/useGetElementSize';

const ScrollableWrapper = styled(Flexbox).attrs(() => ({
	column: true
}))`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	${Scrollbars};
	${({calcPaddingOnlyOnResize}) => (calcPaddingOnlyOnResize ? 'padding-right: 4px;' : 'padding-right: unset;')}
	${({noPadding}) => noPadding && 'padding-right: unset;'}
  ${({borderBox}) => borderBox && 'box-sizing: border-box;'}
  grid-gap: 16px;
`;

interface ScrollableProps {
	children: React.ReactNode;
	className?: string;
	calcPaddingOnlyOnResize?: boolean;
	borderBox?: boolean;
	id?: string;
	flex?: boolean;
	noPadding?: boolean;
	onScroll?: (e: React.UIEvent) => void;
}

export const Scrollable = ({children, className, calcPaddingOnlyOnResize: calcPaddingOnResizeOrigin, borderBox, id, flex, noPadding = false, onScroll = null}: ScrollableProps) => {
	const scrollableRef = useRef<HTMLDivElement | null>(null); // Type the ref
	const scrollableSize = useGetElementSize(scrollableRef.current); // Pass ref directly
	const childrenRef = useRef<HTMLElement | null>(null); // Use a ref for children if needed
	const childrenSize = useGetElementSize(childrenRef.current); // Pass ref directly

	const calcPaddingOnlyOnResize = useMemo(() => {
		if (!calcPaddingOnResizeOrigin) return true;

		if (!scrollableRef.current) return true;

		return childrenSize.height > scrollableSize.height;
	}, [calcPaddingOnResizeOrigin, childrenSize.height, scrollableSize.height]);

	return (
		<ScrollableWrapper flex={flex} ref={scrollableRef} id={id} className={className} calcPaddingOnlyOnResize={calcPaddingOnlyOnResize} borderBox={borderBox} onScroll={(e) => onScroll && onScroll(e)} noPadding={noPadding}>
			{/* Use a ref with the children */}
			{React.isValidElement(children) && React.cloneElement(children, {ref: childrenRef})}
		</ScrollableWrapper>
	);
};
