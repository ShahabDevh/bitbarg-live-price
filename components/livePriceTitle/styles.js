import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blinking = keyframes`
	0% {	transform: scale(0);}
	50% {transform: scale(1.8);}
	100% {transform: scale(0)} 
`;

export const OrangeDot = styled.span`
	position: relative;
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	margin: 0 8px;
	background-color: var(--warning-main);

	&::before {
		content: '';
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		background: inherit;
		border-radius: inherit;
		z-index: 1;
		opacity: 0.3;
		animation: ${blinking} 2s ease-in-out infinite;
	}
`;
