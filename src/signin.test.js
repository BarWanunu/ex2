import { render, screen,waitFor,fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Log In', () => {
    
  test('displays alert message for log in', async () => {
    render(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );

    // Assuming your email input has a type="email"
    const emailInput = screen.getByPlaceholderText('username'); // Adjust 'Email' to match the actual label or placeholder text

    // Simulate user input with an invalid email address
    fireEvent.change(emailInput, { target: { value: 'guest' } });

    // Assuming your email input has a type="email"
    const passwordInput = screen.getByPlaceholderText('Password'); // Adjust 'Email' to match the actual label or placeholder text

    // Simulate user input with an invalid email address
    fireEvent.change(passwordInput, { target: { value: 'Aa12345678' } });

    // Assuming your submit button has a type="submit"
    const submitButton = screen.getByRole('button', { name: 'Log In' }); // Adjust 'Submit' to match the actual text or label

    // Spy on window.alert
    const alertMock = jest.spyOn(window, 'alert');

    // Trigger form submission
    fireEvent.click(submitButton);

    // Check if alert was called with the correct message
    expect(alertMock).toHaveBeenCalledWith('Login Success, welcome to Facebook!');

    // Restore the original alert method
    alertMock.mockRestore();
  });
});