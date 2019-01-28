import React from 'react';
import { render, cleanup } from 'react-testing-library';
import WeatherContainer from './WeatherContainer';

afterEach(() => {
	cleanup();
	console.error.mockClear();
});

console.error = jest.fn();

test('render wait-view when no data', () => {
	render(<WeatherContainer />);
});
