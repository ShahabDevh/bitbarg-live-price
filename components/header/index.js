import { useTheme } from '@emotion/react';
import { Container, Button, Paper, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavButton from '../navButton';

function Header() {
	const { palette } = useTheme();

	return (
		<Paper
			elevation={0}
			sx={{
				height: 64,
				background: palette.background['secondary'],
			}}
		>
			<Container
				maxWidth="lg"
				sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
			>
				<nav>
					<Button
						variant="text"
						size="medium"
						sx={{
							padding: '7px 16px',
							minWidth: 64,
							height: 38.5,
							color: palette.text['primary'],
						}}
						startIcon={
							<MenuIcon sx={{ fontSize: 20, marginRight: 0, marginLeft: 1 }} />
						}
					>
						منو
					</Button>

					<NavButton>خانه</NavButton>
					<NavButton>قیمت لحظه‌ای</NavButton>
					<NavButton>کارمزدها</NavButton>
					<NavButton>پورتفوی</NavButton>
				</nav>

				<Button
					variant="contained"
					size="medium"
					sx={{
						padding: '7px 16px',
						minWidth: 64,
						height: 38.5,
						marginLeft: 'auto',
					}}
				>
					ورود / ثبت نام
				</Button>
				<Divider orientation="vertical" sx={{ margin: '0 8px', height: 24 }} />
				{/* LOGO */}
			</Container>
		</Paper>
	);
}

export default Header;
