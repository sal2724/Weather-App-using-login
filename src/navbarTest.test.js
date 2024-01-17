import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

test('Navbar renders without crashing', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText('Navbar')).toBeInTheDocument();
});

test('Navbar navigation links work correctly', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const homeLink = screen.getByText('Home');
  const loginLink = screen.getByText('Login');
  const registerLink = screen.getByText('Register');
  const dashboardLink = screen.getByText('Dashboard');

  userEvent.click(homeLink);
  expect(screen.getByText('You are on the Home page')).toBeInTheDocument();

  userEvent.click(loginLink);
  expect(screen.getByText('Login Component')).toBeInTheDocument();

  userEvent.click(registerLink);
  expect(screen.getByText('Register Component')).toBeInTheDocument();

  userEvent.click(dashboardLink);
  expect(screen.getByText('Dashboard Component')).toBeInTheDocument();
});

test('Search form works correctly', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const searchInput = screen.getByPlaceholderText('Search');
  const searchButton = screen.getByText('Search');

  userEvent.type(searchInput, 'example search');
  // Add assertions for the behavior when typing into the search input

  userEvent.click(searchButton);
  // Add assertions for the behavior when clicking the search button
});

// You can add more test cases for additional functionalities as needed.
