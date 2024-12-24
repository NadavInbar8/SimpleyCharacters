import {useEffect, useState} from 'react';

export const useGetElementSize = (elementRef: HTMLElement | null) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (!elementRef) return;

		setWidth(elementRef.offsetWidth);
		setHeight(elementRef.offsetHeight);

		window.addEventListener('resize', () => {
			setWidth(elementRef.offsetWidth);
			setHeight(elementRef.offsetHeight);
		});

		return () => {
			window.removeEventListener('resize', () => null);
		};
	}, [elementRef]);

	return {width, height};
};
