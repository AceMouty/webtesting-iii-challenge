// Test away!
import React from 'react'
import { render } from '@testing-library/react';
import Display from './Display';

test("Render the Display", () => {
	render(<Display />)
})

test("Match the current snap shot", () => {
	expect(render(<Display />)).toMatchSnapshot();
})

test("Check the UI to make sure we are displaying open and unlocked in the dispaly", () => {
	const { getByText } = render(<Display />);
	getByText(/open/i);
	getByText(/unlocked/i);
})