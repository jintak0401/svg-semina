import { NameSVG } from '@components';
import svgData from '@constant/svgData';
import Header from '@components/Header';

const Total = () => {
	return (
		<div className="flex flex-col w-full h-full justify-center items-center">
			<Header />
			<div className="flex-1 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-10 w-[80%] justify-center items-center py-5">
				{Object.keys(svgData).map((name, idx) => {
					return (
						<NameSVG
							key={name}
							name={name as keyof typeof svgData}
							hideButton={true}
							begin={1.5 * idx}
							dur={3}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Total;
