import svgData from '@constant/svgData';
import { useEffect, useRef, useState } from 'react';

interface Props {
	name: keyof typeof svgData;
	dur?: number;
	timeDiff?: number;
	strokeDashoffsetTo?: number;
	isSequential?: boolean;
	begin?: number;
	hideButton?: boolean;
}

const NameSVG = ({
	name,
	dur = 1,
	timeDiff = 2,
	isSequential,
	begin = 0,
	hideButton,
}: Props) => {
	const { path, viewBox } = svgData[name];
	const refs = [
		useRef<SVGPathElement | null>(null),
		useRef<SVGPathElement | null>(null),
		useRef<SVGPathElement | null>(null),
	];
	const animateRefs = [
		useRef<SVGAnimateElement | null>(null),
		useRef<SVGAnimateElement | null>(null),
		useRef<SVGAnimateElement | null>(null),
	];

	const [lengths, setLengths] = useState<number[]>([10000, 10000, 10000]);

	const reAnimate = () => {
		animateRefs.forEach((ref) => {
			ref.current?.beginElement();
		});
	};

	const getBegin = (idx?: number): number | number[] => {
		const begins = Array.from(
			{ length: name.length },
			(_, i) => begin + timeDiff * (isSequential ? 1 : 0) * i
		);
		return idx ? begins[idx] : begins;
	};

	useEffect(() => {
		const tmp = Array.from(
			{ length: name.length },
			(_, idx) => refs[idx].current?.getTotalLength() ?? 0
		);
		if (tmp.every((val) => val > 0)) {
			setLengths(tmp);
		}
	}, [refs[0]?.current, refs[1]?.current, refs[2]?.current, name]);

	useEffect(() => {
		const begins = getBegin() as number[];
		begins.forEach((begin, idx) => {
			setTimeout(() => {
				animateRefs[idx].current?.beginElement();
			}, begin * 1000);
		});
	}, [name]);

	if (!path || !viewBox) {
		return <div>에러</div>;
	} else {
		return (
			<div className="w-full h-full">
				<svg
					viewBox={viewBox}
					style={{ fill: 'none', stroke: 'black' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					{path.map((d: string, idx: number) => {
						return (
							<path
								d={d}
								key={d}
								strokeDasharray={lengths[idx]}
								strokeDashoffset={lengths[idx]}
								ref={refs[idx]}
							>
								<animate
									attributeName="stroke-dashoffset"
									id={`anim${idx}`}
									key={`${d} anim${idx}`}
									dur={dur}
									fill="freeze"
									begin={getBegin(idx) as number}
									from={lengths[idx]}
									to={0}
									ref={animateRefs[idx]}
								/>
							</path>
						);
					})}
				</svg>
				{!hideButton && (
					<div className="flex justify-center items-center mt-20">
						<button
							onClick={reAnimate}
							className="border-blue-400 border-2 transition-colors hover:bg-blue-100 text-3xl py-5 px-8 rounded-md"
						>
							다시 보기
						</button>
					</div>
				)}
			</div>
		);
	}
};

export default NameSVG;
