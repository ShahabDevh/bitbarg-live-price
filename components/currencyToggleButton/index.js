import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { setToTether, setToToman } from '../../store/actions/filter';

function CurrencyToggleButton() {
	const { palette } = useTheme();

	const dispatch = useDispatch();

	const { unitPrice } = useSelector(store => store.filterReducer);

	const handleUnitPrice = (event, value) => {
		if (value === 'toman') {
			dispatch(setToToman());
		}

		if (value === 'tether') {
			dispatch(setToTether());
		}
	};

	return (
		<ToggleButtonGroup
			value={unitPrice}
			color="primary"
			exclusive
			onChange={handleUnitPrice}
			fullWidth
			defaultValue="toman"
			sx={{
				border: `1px solid ${palette.divider}`,
				borderRadius: 2,
				height: 48.5,
				padding: 0.5,
			}}
		>
			<ToggleButton
				value="toman"
				sx={{ border: 'none', borderRadius: '8px !important', marginRight: 0.5 }}
			>
				تومان
			</ToggleButton>
			<ToggleButton
				value="tether"
				sx={{ border: 'none', borderRadius: '8px !important' }}
			>
				تتر
			</ToggleButton>
		</ToggleButtonGroup>
	);
}

export default CurrencyToggleButton;
