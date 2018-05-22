import React from 'react';
import Card from './Card';

const CardList = ( { filtered } ) => {
	const cardComponent = filtered.map(entity => {
		return (
			<Card
				key={entity.name}
				entity={entity}
			/>
		);
	});
	
	return (
	 	<div>
			{cardComponent}
		</div>
	);
}

export default CardList;