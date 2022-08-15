import { NameSVG } from '@components';
import svgData from '@constant/svgData';
import { useRouter } from 'next/router';
import Header from '@components/Header';

const Practice = () => {
	const router = useRouter();
	const { name } = router.query;

	if (!svgData.hasOwnProperty(name as keyof typeof svgData)) {
		return <div>에러</div>;
	} else {
		return (
			<div className="flex flex-col w-screen h-screen justify-center items-center">
				<Header />
				<div className="grid xl:grid-cols-11 gap-8 md:grid-cols-6 my-10">
					{Object.keys(svgData).map((name) => {
						return (
							<button
								className="px-5 py-3 border-blue-400 border-2 text-xl hover:bg-blue-100 transition-colors rounded-md"
								key={name}
								onClick={() => {
									router.push(`/name/${name}`, undefined, { shallow: false });
								}}
							>
								{name}
							</button>
						);
					})}
				</div>
				<div className="flex-1" />
				<div className="flex flex-col w-1/3">
					<NameSVG
						name={name as keyof typeof svgData}
						isSequential={true}
						dur={5}
						timeDiff={2}
					/>
				</div>
				<div className="flex-1" />
			</div>
		);
	}
};

export default Practice;
