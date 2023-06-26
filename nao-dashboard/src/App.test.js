import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from './Components/login';

const mockStore = configureStore([]);

describe('Login', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        isLoggedIn: false,
      },
    });
  });

  it('renders the login form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    // Assert that the login form is rendered
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('submits the login form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Assert that the form submission was successful
    expect(screen.getByText('Login successful')).toBeInTheDocument();
  });

  it('displays an error message for invalid credentials', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    // Fill in the form fields with invalid credentials
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'invalidpassword' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Assert that the error message is displayed
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });
});
