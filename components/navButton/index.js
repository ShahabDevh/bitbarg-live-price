import { useTheme } from '@emotion/react';
import { Button } from '@mui/material';

function NavButton({ url, children }) {
	const { palette } = useTheme();

	return (
		<Button
			variant="text"
			size="medium"
			sx={{
				color: palette.grey['main'],
				padding: '7px 16px',
				minWidth: 64,
				height: 38.5,
				fontSize: 14,
				fontWeight: 400,
			}}
			href={url}
		>
			{children}
		</Button>
	);
}

NavButton.defaultProps = { url: '/' };

export default NavButton;
