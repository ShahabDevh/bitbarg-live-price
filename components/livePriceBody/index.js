import { useTheme } from '@emotion/react';
import { Container } from '@mui/material';
import LivePriceFilterWrapper from '../livePriceFilterWrapper';
import LivePriceTitle from '../livePriceTitle';
import TableWrapper from '../tableWrapper';
import { LivePriceBox } from './styles';

function LivePriceBody() {
	const { palette } = useTheme();

	return (
		<Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
			<LivePriceBox
				elevation={1}
				sx={{
					background: palette.background['paper'],
					paddingY: 5,
				}}
			>
				<LivePriceTitle />
				<LivePriceFilterWrapper />
				<TableWrapper />
			</LivePriceBox>
		</Container>
	);
}

export default LivePriceBody;
