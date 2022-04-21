import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { CustomTableWrapper, TableHeader, TableBody } from './styles';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { getLivePrice } from '../../services/livePrice';
import Loading from '../loading';
import CryptoRow from '../cryptoRow';

function TableWrapper() {
	const { ref, inView } = useInView();

	const { query, sort } = useSelector(store => store.filterReducer);

	const createQuery = useCallback(
		pageParam => {
			const q = query.length ? `&q=${query}` : '';
			const sort = typeof sort === 'number' ? `&sort=${sort}` : '';

			return `?page=${pageParam}${q}${sort}`;
		},
		[query, sort]
	);

	const { data, isLoading, isError, error, isFetchingNextPage, fetchNextPage } =
		useInfiniteQuery(
			['prices', query, sort],
			({ pageParam = 1 }) => getLivePrice(createQuery(pageParam)),
			{
				getNextPageParam: lastPage => {
					const finalPageNumber = lastPage.data.result.meta.paginateHelper.lastPage;
					const nextPage = lastPage.data.result.meta.paginateHelper.currentPage + 1;

					return nextPage <= finalPageNumber ? nextPage : undefined;
				},
			}
		);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			<div>
				<p>message: {error.message}</p>
			</div>
		);
	}

	return (
		<CustomTableWrapper>
			<TableHeader>
				<Typography variant="body1" component="span" className="table-cell-30">
					ارز دیجیتال
				</Typography>
				<Typography variant="body1" component="span" className="table-cell-30">
					قیمت خرید
				</Typography>
				<Typography variant="body1" component="span" className="table-cell-30">
					قیمت فروش
				</Typography>

				<Typography variant="body1" component="span" className="table-cell-148p">
					نمودار
				</Typography>
				<Typography variant="body1" component="span" className="table-cell-148p">
					تغییرات
				</Typography>
				<Typography variant="body1" component="span" className="table-cell-94p">
					نشان کردن
				</Typography>
			</TableHeader>
			<TableBody>
				{data.pages.map(({ data, ...rest }) => {
					const previousPages = data.result.meta.paginateHelper.currentPage - 1;
					const pageItemSize = data.result.meta.paginateHelper.pageSize;

					return data.result.items.map((item, index) => (
						<CryptoRow
							key={item.id}
							data={item}
							coinIndex={previousPages * pageItemSize + index + 1}
							currentCurrency={data.result.meta.prices}
						/>
					));
				})}
				{isFetchingNextPage && <Loading />}
				<div ref={ref} />
			</TableBody>
		</CustomTableWrapper>
	);
}

export default TableWrapper;
