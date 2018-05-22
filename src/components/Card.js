import React from 'react'
import './Card.css'

const Card = ({ entity }) => {

	const address = `https://robohash.org/${entity.name}?200x200`

	let values = [];
	let properties = [];

	//add resulting object properties and values to two separate arrays
	Object.keys(entity).forEach(function(key) {
    		values.push(entity[key])
    		properties.push(key)
		});

	//transform array containing object properties - exclude underscores if there is any - capitalize first letter
	let propertiesCapitalized = properties.map((item) => {
				if (item.includes('_')) {
					item = item.split("_").join(" ");
				}
			return item.charAt(0).toUpperCase() + item.slice(1);
		}
	);

	return (
		<div className="dib pa3 ma2 grow w-75 w-50-m w-third-l br2 bgcolor b--dashed b--white-10">
			<div>
			{propertiesCapitalized[0]} : {values[0]} <br />
			{propertiesCapitalized[1]} : {values[1]} <br />
			{propertiesCapitalized[2]} : {values[2]} <br />
			{propertiesCapitalized[3]} : {values[3]} <br />
			{propertiesCapitalized[4]} : {values[4]} <br />
			</div>
		</div>
	);
}

export default Card;