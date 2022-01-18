import React from 'react'
import './card.style.css'


export const Card = (props) =>{
	return(
		<div className = 'card-conteiner'>
			<img src={`https://robohash.org/${props.monster.id}?set=set2&size=100x100`} alt="monster"/>
			<h1 className = 'list-monster'>{props.monster.name}</h1>
			<p> { props.monster.email }</p>
		</div>
	)
}

