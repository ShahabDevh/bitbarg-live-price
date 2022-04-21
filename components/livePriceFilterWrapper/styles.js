import { styled } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material';

export const SearchInput = styled(OutlinedInput)(({ theme }) => ({
	height: '100%',
	paddingInline: 14,
	borderRadius: 8,
	borderColor: theme.palette.divider,

	'& .MuiOutlinedInput-input::placeholder': {
		color: theme.palette.grey['900'],
		fontWeight: 500,
	},
	'& .MuiSvgIcon-root': {
		fontSize: 17.5,
		color: theme.palette.secondary['main'],
	},
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.divider,
	},
}));
