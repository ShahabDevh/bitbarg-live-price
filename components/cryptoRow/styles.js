import styled from '@emotion/styled';

export const Box = styled.div`
	width: 100%;
	height: 55px;
	padding-inline: 24px;
	border-bottom: 1px solid var(--divider);
	padding: 10px 0;
	height: 76px;
	cursor: pointer;

	.mock-btn {
		display: flex;
		align-items: center;
		padding: 0 24px;
		height: 55px;

		& > div:not(:first-of-type) {
			justify-content: center;
		}

		.cell-chart {
			height: 100%;
		}
	}

	.col {
		&-30 {
			flex: 1 1 30%;
		}

		&-148p {
			flex: 1 1 148px;
			text-align: center;
		}

		&-94p {
			flex: 1 1 94px;
			min-width: 94px;
			text-align: center;
		}
	}
`;

export const CellName = styled.div`
	display: flex;

	.imageWrapper {
		width: 36px;
		height: 36px;
		margin-inline: 16px 12px;
	}

	.titleWrapper {
		display: flex;
		flex-direction: column;
	}

	.coin-index {
		display: inline-block;
		text-align: center;
		font-weight: 600;
		color: var(--text-secondary);
		background: var(--divider);
		border-radius: 2px;
		width: 19px;
		height: 19px;
		margin-left: 4px;
	}
`;

export const CellTradePrice = styled.div`
	display: flex;
	align-items: center;

	& > span:not(.toman-unit) {
		color: var(--grey-900);
		margin-inline: 6px;
	}

	.toman-unit {
		display: inline-block;
		color: var(--text-secondary);
	}
`;

export const CellChanges = styled.div`
	color: ${props =>
		props.percentage > 0
			? 'var(--success-main)'
			: props.percentage < 0
			? 'var(--error-main)'
			: 'var(--text-primary)'};
	font-weight: 700;

	& > span {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
