import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { prefixer } from 'stylis';
import { wrapper, store } from '../store/storeConfig';
import { theme } from '../utils/muiTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';

const queryClient = new QueryClient();

// Create rtl cache
const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
	return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RTL>
					<ThemeProvider theme={theme}>
						<Component {...pageProps} />
					</ThemeProvider>
				</RTL>
				{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
			</QueryClientProvider>
		</Provider>
	);
}

export default wrapper.withRedux(MyApp);
