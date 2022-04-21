import { useTheme } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { OrangeDot } from './styles';

function LivePriceTitle() {
	const { palette } = useTheme();

	return (
		<Stack direction="row" alignItems="center">
			<Typography
				variant="h4"
				component="h2"
				sx={{ fontWeight: 700, marginInlineEnd: 3 }}
			>
				قیمت لحظه‌ای
			</Typography>

			<Typography color={palette.grey['main']} variant="body1">
				<OrangeDot />
				291 ارز دیجیتال
			</Typography>
		</Stack>
	);
}

export default LivePriceTitle;
