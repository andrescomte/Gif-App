import { PropTypes } from "prop-types";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({target}) =>{
		setInputValue(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault();
		if( inputValue.trim().length <=1) return;
		setInputValue('');
		onNewCategory(inputValue.trim())
	}

	return (
		<form onSubmit={(event) => onSubmit(event)} aria-label="form">
			<input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange} />
		</form>
	)
}

AddCategory.propTypes ={
	onNewCategory: PropTypes.func.isRequired
}
