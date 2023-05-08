import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en <GifGrid/>', () => {
	const category= 'One Punch'
	test('debe de mostrar el loading inicialmente', () => {

		useFetchGifs.mockReturnValue({
			images:[],
			isLoading: true
		})
		render(<GifGrid category={category}/>);
		//screen.debug();
		expect(screen.getByText('Cargando...'))
		expect(screen.getByText(category))
	});

	test('debe de mostrar items cuando se cargan las imagenes de usefetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Testing',
				url:'https://Testing.com/img/test.jpg'
			},
			{
				id: '123',
				title: 'Testing2',
				url:'https://Testing.com/img/test2.jpg'
			}
		]
		useFetchGifs.mockReturnValue({
			images:gifs,
			isLoading: true
		})

		render(<GifGrid category={category}/>);
		//screen.debug();
		expect(screen.getAllByRole('img').length).toBe(2);

	});
})