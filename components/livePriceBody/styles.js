import styled from '@emotion/styled';

export const LivePriceBox = styled.div`
	background: var(--background-paper);
	padding: 32px;
	position: relative;
	border-radius: 16px;
	box-shadow: 0 40px 72px rgb(179 179 179 / 8%);

	&::before {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--background-secondary);
		background-size: cover;
		z-index: -1;
	}
`;
