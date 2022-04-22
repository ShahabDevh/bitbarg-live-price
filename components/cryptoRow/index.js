import Image from 'next/image';
import { useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import { Box, CellChanges, CellName, CellTradePrice } from './styles';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
// a simple replacement for tether missing icon
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import CryptoChart from '../cryptoChart';

// CellTradePrice can be separated component
function CryptoRow({ data, coinIndex, currentCurrency }) {
	const { unitPrice } = useSelector(store => store.filterReducer);

	return (
		<Box>
			<div className="mock-btn">
				<CellName className="col-30">
					<div className="imageWrapper">
						<Image
							src={data.icon}
							alt={data.enName}
							width={36}
							height={36}
							layout="responsive"
						/>
					</div>
					<div className="titleWrapper">
						<Typography className="coin-name" variant="body1" component="div">
							{data.enName}
						</Typography>
						<Typography className="coin-info" variant="caption" component="div">
							<span className="coin-index">{coinIndex}</span>
							<span>{data.coin}</span>
						</Typography>
					</div>
				</CellName>
				<CellTradePrice className="col-30">
					{unitPrice === 'tether' ? (
						<>
							<AttachMoneyRoundedIcon fontSize="14" />
							<Typography variant="body1" component="span">
								{data.price}
							</Typography>
						</>
					) : (
						<>
							<Typography variant="body1" component="span" className="toman-unit">
								تومان
							</Typography>
							<Typography variant="body1" component="span">
								{data.price * currentCurrency.buy}
							</Typography>
						</>
					)}
				</CellTradePrice>
				<CellTradePrice className="col-30">
					{unitPrice === 'tether' ? (
						<>
							<Typography variant="body1" component="span">
								{data.quote} USDT
							</Typography>
						</>
					) : (
						<>
							<Typography variant="body1" component="span">
								{data.price * currentCurrency.sell}
							</Typography>
							<Typography variant="body1" component="span" className="toman-unit">
								تومان
							</Typography>
						</>
					)}
				</CellTradePrice>
				<div className="cell-chart col-148p">
					<CryptoChart
						data={data.chart}
						coinName={data.coin}
						isPositive={data.percent >= 0}
					/>
				</div>
				<CellChanges className="cell-changes col-148p" percentage={data.percent}>
					<Typography variant="caption">
						{data.percent > 0 ? (
							<ArrowDropUpRoundedIcon />
						) : data.percent < 0 ? (
							<ArrowDropDownRoundedIcon />
						) : (
							<ArrowRightRoundedIcon />
						)}
						{`${data.percent}%`}
					</Typography>
				</CellChanges>
				<div className="col-94p">
					<IconButton>
						<StarBorderRoundedIcon fontSize="24" />
					</IconButton>
				</div>
			</div>
		</Box>
	);
}

export default CryptoRow;
