import styled from '@emotion/styled';

export const CustomTableWrapper = styled.div`
	/* @noflip */
	direction: ltr;
`;

export const TableHeader = styled.div`
	display: flex;
	background: var(--background-secondary);
	color: var(--text-primary);
	border-radius: 8px;
	padding-inline: 24px;
	margin-bottom: 14px;

	& > span {
		padding: 14px 16px;
		white-space: nowrap;

		&:not(:first-of-type) {
			text-align: center;
		}
	}

	.table-cell-30 {
		flex: 1 1 30%;
	}

	.table-cell-148p {
		flex: 1 1 148px;
	}

	.table-cell-94p {
		flex: 1 1 94px;
	}
`;

export const TableBody = styled.div`
	/* @noflip */
	direction: 'ltr';
`;
