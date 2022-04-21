import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Button, FormControl, Grid, InputAdornment } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { setSearchQuery } from '../../store/actions/filter';
import SortField from '../sortField';
import CurrencyToggleButton from '../currencyToggleButton';
import { SearchInput } from './styles';

function LivePriceFilterWrapper() {
	const { palette, typography } = useTheme();

	const dispatch = useDispatch();

	const handleChangeInput = value => {
		dispatch(setSearchQuery(value));
	};

	return (
		<Grid container columnSpacing={3} sx={{ marginBlock: 3 }}>
			<Grid item xs={4}>
				<FormControl fullWidth sx={{ height: 48.5 }}>
					<SearchInput
						placeholder="جستجو"
						onChange={e => handleChangeInput(e.target.value)}
						fullWidth
						startAdornment={
							<InputAdornment position="start">
								<SearchRoundedIcon fontSize="small" />
							</InputAdornment>
						}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={4}>
				<Grid container spacing={1.5} sx={{ height: '100%' }}>
					<Grid item xs="auto" sm={6}>
						<Button
							variant="contained"
							color="light"
							sx={{
								height: 48.5,
								fontWeight: '400',
								border: `1px solid ${palette.divider}`,
								borderRadius: 2,
								padding: 0.875,
							}}
							fullWidth
							startIcon={
								<StarBorderRoundedIcon
									sx={{ fontSize: typography.body1.fontSize }}
								/>
							}
						>
							<span style={{ fontSize: 14 }}> نشان شده‌ها</span>
						</Button>
					</Grid>

					<Grid item xs="auto" sm={6}>
						<SortField />
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<CurrencyToggleButton />
			</Grid>
		</Grid>
	);
}

export default LivePriceFilterWrapper;
