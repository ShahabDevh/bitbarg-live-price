import Head from 'next/head';
import LivePriceBody from '../components/livePriceBody';
import Header from '../components/header';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>BitBarg Task</title>
				<meta name="description" content="A task from bitbarg" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<LivePriceBody />
		</div>
	);
}
