import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

	const [categories, setCategories] = useState(['One Punch'])

	const onAddCategory = (newCategory) =>{
		if( categories.includes(newCategory)) return;
		setCategories((prevElements) => [newCategory, ...prevElements]);
	}

	return (
		<>
		<h1>Gift Expert App</h1>
		<AddCategory 
			onNewCategory = {event => onAddCategory(event)}
		/>
		{
			categories.map((category) => (
				<GifGrid key ={category} category={category}/>
			))
		}
		</>
	)
}
