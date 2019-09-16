// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls'

test("Render controls", () => {
	render(<Controls />)
})

test("Matching snapshot created", () => {
	expect(render(<Controls />)).toMatchSnapshot()
})

test("Check for all the controls on the page when gate is unlocked and open",  () => {
	const state= {
		locked: false,
		closed: false
	};

	const { getByText } = render(
	<Controls 
		locked={state.locked} 
		closed={state.closed}
	/>
		);
	getByText(/close gate/i);
	getByText(/lock gate/i);
})

test("Check for all the controls on the page when gate is closed", () => {
	const close = jest.fn()
	const { getByText } = render(<Controls locked={false} closed={false} toggleClosed={close}/>)
	const closeButton = getByText(/close gate/i);
	expect(closeButton.disabled).toBe(false);
	fireEvent.click(closeButton);
	expect(close).toBeCalled();
})