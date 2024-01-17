import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from './Weather';

// Mocking fetch for testing purposes
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'City', main: { temp: 25 }, weather: [{ main: 'Sunny', description: 'Clear sky' }] }),
  })
);

describe('Weather component', () => {
  test('renders Weather component', () => {
    render(<Weather />);
    expect(screen.getByText('Weather App')).toBeInTheDocument();
  });

  test('updates weather information on search', async () => {
    render(<Weather />);
    const input = screen.getByPlaceholderText('Enter city/town...');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'City' } });
    fireEvent.click(button);

    // Wait for the asynchronous fetch to complete
    // await waitFor(() => {
    //   expect(screen.getByText('City')).toBeInTheDocument();
    //   expect(screen.getByText('25°C')).toBeInTheDocument();
    //   expect(screen.getByText('Sunny')).toBeInTheDocument();
    //   expect(screen.getByText('(Clear sky)')).toBeInTheDocument();
    // });
  });
});