import React from 'react'
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba white bg-near-black'
				type='search'
				placeholder='enter searchphrase'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;