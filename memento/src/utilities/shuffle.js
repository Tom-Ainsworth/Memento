const shuffle = () => {
	const assets = [
		{ image: '/assets/css.png' },
		{ image: '/assets/html5.png' },
		{ image: '/assets/jquery.png' },
		{ image: '/assets/js.png' },
		{ image: '/assets/next.png' },
		{ image: '/assets/node.png' },
		{ image: '/assets/react.png' },
		{ image: '/assets/ts.png' },
	];
	// Return an array of assets, duplicated and sorted randomly
	return [...assets, ...assets]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
