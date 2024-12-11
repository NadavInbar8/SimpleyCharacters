import styled, {css} from 'styled-components';
import {Link as LinkOrigin} from 'react-router';

interface LinkProps {
	underlined?: boolean;
	color?: string;
	size?: string;
	to?: string;
	className?: string;
	children: React.ReactNode;
}

const common = css<LinkProps>`
	${({underlined}) => `text-decoration: ${underlined ? 'underline' : 'none'};`}
	color: ${({color}) => color || 'white'};
	font-size: ${({size}) => size || '1rem'};
`;

// Use `styled` typing to ensure compatibility with HTML props
const InternalLink = styled.span<LinkProps>`
	> a {
		${common};
	}
`;

const ExternalLink = styled.a<LinkProps>`
	${common};
`;

export const Link = ({children, ...props}: LinkProps) =>
	props.to ? (
		<InternalLink underlined={props.underlined} color={props.color} size={props.size}>
			<LinkOrigin to={props.to} className={props.className}>
				{children}
			</LinkOrigin>
		</InternalLink>
	) : (
		<ExternalLink {...props}>{children}</ExternalLink>
	);
