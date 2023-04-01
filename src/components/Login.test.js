import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import axios from "axios";

describe('<Login />', () => { 
  test('Login ID input and label should be rendered', () => {
    render(<Login />);
    const loginIDLabelEl = screen.getByText('Login ID');
    const loginIDInputEl = screen.getByPlaceholderText('Enter your login id...');
    expect(loginIDLabelEl).toBeInTheDocument();
    expect(loginIDInputEl).toBeInTheDocument();
  });

  test('password and label should be rendered', () => {
    render(<Login />);
    const passwordLabelEl = screen.getByText('Password');
    const passwordInputEl = screen.getByPlaceholderText('Enter your password...');
    expect(passwordLabelEl).toBeInTheDocument();
    expect(passwordInputEl).toBeInTheDocument();
  });

  test('button should be rendered', () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button', {
      name: 'Login'
    });
    expect(buttonEl).toBeInTheDocument();
  });

  test('Login ID and password should be empty', () => {
    render(<Login />);
    const loginIDInputEl = screen.getByPlaceholderText('Enter your login id...');
    const passwordInputEl = screen.getByPlaceholderText('Enter your password...');
    expect(loginIDInputEl.value).toBe('');
    expect(passwordInputEl.value).toBe('');
  });

  test('button should be disabled', () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button', {
      name: 'Login'
    });
    expect(buttonEl).toBeDisabled();
  });

  test('Error should not be visible', () => {
    render(<Login />);
    const error = screen.getByText('Something went wrong!');
    expect(error).not.toBeVisible();
  });

  test('Login ID and password input should change', () => {
    render(<Login />);
    const loginIDInputEl = screen.getByPlaceholderText('Enter your login id...');
    const passwordInputEl = screen.getByPlaceholderText('Enter your password...');
    const testLoginId = 'test';
    const testPassword = 'test';

    fireEvent.change(loginIDInputEl, { target: { value: testLoginId }});
    fireEvent.change(passwordInputEl, { target: { value: testPassword }});

    expect(loginIDInputEl.value).toBe('test');
    expect(passwordInputEl.value).toBe('test');
  });

  test('button should not be disabled when inputs arent empty', () => {
    render(<Login />);
    const buttonEl = screen.getByRole('button', {
      name: 'Login'
    });
    const loginIDInputEl = screen.getByPlaceholderText('Enter your login id...');
    const passwordInputEl = screen.getByPlaceholderText('Enter your password...');
    const testLoginId = 'test';
    const testPassword = 'test';

    fireEvent.change(loginIDInputEl, { target: { value: testLoginId }});
    fireEvent.change(passwordInputEl, { target: { value: testPassword }});

    expect(buttonEl).not.toBeDisabled();
  });
});