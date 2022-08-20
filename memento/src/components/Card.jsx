const Card = ({ image, selected, onClick }) => {
	return (
		<div className="card">
			<div className={selected && 'selected'}>
				<img src={image} alt="" className="card-face" />
				<img
					alt=""
					className="card-back"
					src={'/assets/fireship.png'}
				/>
			</div>
		</div>
	);
};

export default Card;
