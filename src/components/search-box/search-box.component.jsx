import React from 'react'
import './search-box.styles.css'


export const SearchBox = ({placeholder, hadleChange}) => {
	return (
		<input
			className='app_input'
			type='search'
			placeholder={placeholder}
			onChange={hadleChange}
		/>
	)
}