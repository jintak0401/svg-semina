import Image from 'next/image';

const Header = () => {
	return (
		<header className="bg-blue-400 w-full py-2 px-2">
			<a href={'/'}>
				<Image src={'/hmm.gif'} height={80} width={160} alt={'홈터레스팅'} />
			</a>
		</header>
	);
};

export default Header;
