import { Area, AreaChart, ResponsiveContainer } from 'recharts';

// bugs :(
function CryptoChart({ data, coinName, isPositive }) {
	const chartData = data.map(item => ({
		name: coinName,
		uv: item,
	}));

	return (
		<ResponsiveContainer style={{ width: '100%', height: '100%' }}>
			<AreaChart data={chartData} style={{ marginBottom: '-15px' }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="15%"
							stopColor={isPositive ? '#a0d6aeb2' : '#f5a09bb2'}
							stopOpacity={0.8}
						/>
						<stop
							offset="85%"
							stopColor={isPositive ? '#a0d6aeb2' : '#f5a09bb2'}
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>
				<Area
					type="monotone"
					dataKey="uv"
					stroke={isPositive ? '#30be81' : '#EB4137'}
					fill="url(#colorUv)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default CryptoChart;
