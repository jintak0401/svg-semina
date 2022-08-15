import Header from '@components/Header';
import svgData from '@constant/svgData';

const Name = () => {
	return (
		<div className="flex flex-col w-screen h-screen items-center justify-center">
			<Header />
			<div
				className="flex-1 grid xl:grid-cols-6 gap-x-5 gap-y-3 justify-center items-center w-[70%]
						md:grid-cols-4"
			>
				{Object.keys(svgData).map((name) => {
					return (
						<a
							key={name}
							href={`/name/${name}`}
							className="flex justify-center items-center border-2 border-blue-400 hover:bg-blue-100 transition-colors text-3xl py-10 rounded-md"
						>
							{name}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Name;
