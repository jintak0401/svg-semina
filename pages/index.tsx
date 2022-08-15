import type { NextPage } from 'next';
import Header from '@components/Header';

const Home: NextPage = () => {
	return (
		<div className="flex flex-col w-screen h-screen">
			<Header />
			<div className="flex flex-1 gap-10 justify-center items-center">
				<a
					href={'/total'}
					className={
						'flex justify-center items-center text-5xl p-20 border-2 border-blue-400 w-1/3 h-1/3 hover:bg-blue-100 transition-colors rounded-md'
					}
				>
					전체보기
				</a>
				<a
					href={'/name'}
					className={
						'flex justify-center items-center text-5xl p-20 border-2 border-blue-400 w-1/3 h-1/3 hover:bg-blue-100 transition-colors rounded-md'
					}
				>
					개별보기
				</a>
			</div>
		</div>
	);
};

export default Home;
