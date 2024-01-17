import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Login from "./Login";
it('should have a username and a password field, also a submit button', () => {
    render(<Login />)
    const usernameField = screen.getByText(/Username/i); 
    const passwordField = screen.getByText(/Password/i); 
    const submitButton = screen.getByText(/Login/i);

    expect(usernameField).toBeInTheDocument(); 
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

});

// it('should allow the user to submit their credentials', () => {
//     const submit = jest.fn();
//     render(<Login submit={submit}/>)
//     const usernameField = screen.getByLabelText(/username/i); 
//     const passwordField = screen.getByLabelText(/password/i); 
//     const submitButton = screen.getByText(/submit/i);
    
//     userEvent.type(usernameField, "user"); 
//     userEvent.type (passwordField, "1234");
    
//     userEvent.click(submitButton);
//     expect(submit).toHaveBeenCalledWith({
//         username: 'user',
//         password: '1234'

//     });


// });