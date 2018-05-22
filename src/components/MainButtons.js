import React from 'react'

const MainButtons = ({ clickEvent }) => {
	return (
		<div>
			 <button value='Home'
		 	className='f6 link dim ph3 pv2 mb2 dib white bg-near-black'
		 	onClick= {clickEvent}
		 	>
		 	Home
		 	</button>
		
		 <button value='Characters'
		 	className='f6 link dim ph3 pv2 mb2 dib white bg-near-black'
		 	onClick= {clickEvent}
		 >
		 	Characters
		 </button>
		 <button value='Starships'
		 	className='f6 link dim ph3 pv2 mb2 dib white bg-near-black'
		 	onClick= {clickEvent}
		 >
		 	Starships
		 </button>
		 <button value='Planets'
		 	className='f6 link dim ph3 pv2 mb2 dib white bg-near-black'
		 	onClick= {clickEvent}
		 >
		 	Planets
		 </button>
		</div>)
}

export default MainButtons;