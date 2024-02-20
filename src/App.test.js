import { render, screen,waitFor,fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
describe('App component - Log In', () => {
  test('redirects to /signup page when clicking Sign Up button', async () => {
    render(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );
    window.history.pushState({}, 'Signin Page', '/');

    fireEvent.click(screen.getByText('Sign Up'));

    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      expect(window.location.pathname).toBe('/signup');
    });
  });

  test('displays alert message for invalid email address', async () => {
    render(
      <Router initialEntries={['/signup']}>
        <App />
      </Router>
    );

    // Assuming your email input has a type="email"
    const emailInput = screen.getByPlaceholderText('Email address'); // Adjust 'Email' to match the actual label or placeholder text

    // Simulate user input with an invalid email address
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    // Assuming your submit button has a type="submit"
    const submitButton = screen.getByRole('button', { name: 'Submit' }); // Adjust 'Submit' to match the actual text or label

    // Spy on window.alert
    const alertMock = jest.spyOn(window, 'alert');

    // Trigger form submission
    fireEvent.click(submitButton);

    // Check if alert was called with the correct message
    expect(alertMock).toHaveBeenCalledWith('Please enter a valid email address');

    // Restore the original alert method
    alertMock.mockRestore();
  });

});

