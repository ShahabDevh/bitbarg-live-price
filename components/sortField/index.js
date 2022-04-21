import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
	setSortToDefault,
	setSortToHigh,
	setSortToLow,
} from '../../store/actions/filter';

function SortField() {
	const { palette } = useTheme();

	const dispatch = useDispatch();

	const [value, setValue] = useState('');
	const [open, setOpen] = useState(false);

	const handleSort = value => {
		if (value === 'lth') {
			setValue(value);
			dispatch(setSortToHigh());
		}

		if (value === 'htl') {
			setValue(value);
			dispatch(setSortToLow());
		}
	};

	const handleRestSort = () => {
		setValue('');
		dispatch(setSortToDefault());
	};

	const sorts = [
		{ value: '', label: '' },
		{ value: 'lth', label: 'کمترین قیمت' },
		{ value: 'htl', label: 'بیشترین قیمت' },
	];

	const inputProps = {
		id: 'sort-input',
		sx: {
			paddingRight: 0,
			paddingLeft: 0,
		},
	};

	const handleIconComponent = props =>
		value ? (
			<InputAdornment position="end">
				<IconButton edge="start" size="medium" onClick={handleRestSort}>
					<CloseRoundedIcon
						sx={{
							fontSize: 21,
							color: palette.secondary['main'],
							left: -2,
						}}
						{...props}
					/>
				</IconButton>
			</InputAdornment>
		) : (
			<InputAdornment position="end">
				<IconButton edge="start" size="medium" onClick={() => setOpen(true)}>
					<KeyboardArrowDownRoundedIcon
						sx={{
							fontSize: 21,
							color: palette.secondary['main'],
							left: -2,
						}}
						{...props}
					/>
				</IconButton>
			</InputAdornment>
		);

	return (
		<FormControl
			fullWidth
			sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: palette.divider } }}
			color="grey"
		>
			<InputLabel
				htmlFor="sort-input"
				shrink={Boolean(value.length)}
				focused={false}
			>
				ترتیب بر اساس
			</InputLabel>
			<Select
				labelId="sort-input"
				id="sort-input-select"
				label={value.length ? 'ترتیب بر اساس' : ''}
				variant="outlined"
				open={open}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
				IconComponent={handleIconComponent}
				inputProps={inputProps}
				sx={{
					height: 48.5,
					fontWeight: '400',
					borderRadius: 2,
					padding: 1.75,

					'& .MuiSelect-select': {
						paddingRight: '0px !important',
					},
				}}
				onChange={e => handleSort(e.target.value)}
				value={value ?? ''}
			>
				{sorts.map(option => (
					<MenuItem
						key={option.value}
						value={option.value}
						sx={{ display: option.value === '' ? 'none' : 'block' }}
					>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default SortField;
