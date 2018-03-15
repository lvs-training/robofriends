import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
	return (
		<div>
			{ 
				robots.map((robot, idx) => {
					const id = robots[idx].id
					return (
						<Card 
							key={id} 
							id={id} 
							name={robots[idx].name} 
							email={robots[idx].email} 
						/>
					);
				})
			 }
		</div>
	);
}

export default CardList;