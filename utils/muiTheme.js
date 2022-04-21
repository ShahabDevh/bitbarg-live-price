import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	direction: 'rtl',
	typography: {
		fontFamily: ['IRANSans', 'Arial', 'sans-serif'].join(','),
		htmlFontSize: 16,
		h1: { fontSize: '1.714285714285714rem' },
		h2: { fontSize: '1.571428571428571rem' },
		h3: { fontSize: '1.428571428571429rem' },
		h4: { fontSize: '1.285714285714286rem' },
		h5: { fontSize: '1.142857142857143rem' },
		h6: { fontSize: '1rem' },
		body1: { fontSize: '0.857142857142857rem' },
		body2: { fontSize: '0.785714285714286rem' },
		caption: { fontSize: '0.714285714285714rem' },
		overline: { fontSize: '0.642857142857143rem' },
	},
	palette: {
		divider: '#e0e0e0',
		common: {
			black: '#212121',
			white: '#ffffff',
		},
		primary: {
			main: '#4285f2',
			light: '#4285f24d',
			lighter: '#4285f21a',
			contrastText: '#fff',
		},
		secondary: {
			main: '#8b9098',
			light: '#ebedf1',
			contrastText: '#fff',
		},
		grey: {
			main: '#00000099',
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#eee',
			300: '#e0e0e0',
			400: '#bdbdbd',
			500: '#9e9e9e',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121',
			A100: '#f5f5f5',
			A200: '#eee',
			A400: '#bdbdbd',
			A700: '#616161',
		},
		success: {
			main: '#30be81',
			light: '#a0d6aeb2',
			lighter: '#a0d6ae1a',
		},
		error: {
			main: '#eb4137',
			light: '#f5a09bb2',
			lighter: '#f5a09b1a',
		},
		warning: {
			main: '#fbbd06',
			light: '#fdde82b2',
			lighter: '#fdde821a',
		},
		info: {
			main: '#4a7f9c',
			light: '#60abd547',
			lighter: '#60abd51a',
		},
		text: {
			primary: '#212121',
			secondary: '#00000099',
			mute: '#bdbdbd',
		},
		background: {
			default: '#fff',
			secondary: '#fafafa',
			paper: '#fff',
		},
		action: {
			disabledBackground: '#6c759624',
			selected: 'rgba(0,0,0,0.08)',
		},

		// custom palette for lightButtons
		light: {
			main: '#fafafa',
			dark: '#2121210a',
			light: '#fff',
			contrastText: '#212121',
		},
	},
	shadows: {
		1: '0px 0px 4px rgba(0,0,0,0.14)',
		2: '0px 12px 32px rgba(0,0,0,0.04)',
	},
});
