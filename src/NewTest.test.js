import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { useDispatch } from "react-redux";
import userReducer, { login } from './features/userSlice';
import { useNavigate } from "react-router-dom";
import Login from './Login';

// Mocking useDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

// Mocking useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login component', () => {
  let store;

  beforeEach(() => {
    store = createStore(userReducer);
  });

  test('renders login form', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(screen.getByText('LOGIN FORM')).toBeInTheDocument();
  });

  test('handles login correctly', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useNavigate.mockReturnValue(jest.fn());
  
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  
    fireEvent.change(screen.getByPlaceholderText('Enter username...'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Enter password...'), { target: { value: '1234' } });
    fireEvent.click(screen.getByText('Login'));
  
    expect(dispatch).toHaveBeenCalledWith(login({ Username: 'user', Password: '1234', isLoggedIn: false }));
  });

});