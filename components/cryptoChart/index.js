import { Area, AreaChart, ResponsiveContainer } from 'recharts';

function CryptoChart({ data, coinName, isPositive }) {
	const chartData = data.map(item => ({
		name: coinName,
		value: item,
	}));

	return (
		<ResponsiveContainer height="100%" width="100%">
			<AreaChart
				data={chartData}
				margin={{
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
				}}
				height={40}
				width={148}
			>
				<defs>
					<linearGradient id="redUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="15%" stopColor="#f5a09bb2" stopOpacity={0.8} />
						<stop offset="85%" stopColor="#f5a09bb2" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="greenUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="15%" stopColor="#a0d6aeb2" stopOpacity={0.8} />
						<stop offset="85%" stopColor="#a0d6aeb2" stopOpacity={0} />
					</linearGradient>
				</defs>
				<Area
					type="monotone"
					dataKey="value"
					stroke={isPositive ? '#30be81' : '#EB4137'}
					fill={isPositive ? 'url(#greenUv)' : 'url(#redUv)'}
					width={148}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default CryptoChart;
