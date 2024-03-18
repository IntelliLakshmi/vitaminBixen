import {render, fireEvent, screen} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../src/App.tsx";
import contactAndDelivery from "../../src/delivery-and-contact-info/ContactAndDelivery.tsx";

describe(`Testing ${contactAndDelivery.name}`, async () => {
    // Forname Field Testing
    // Testing Forname Empty Field Error Logic
    it('Forname should display error message "Udfyld venligst dette felt" when empty', () => {
        render(<App /> );

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = screen.getByLabelText('Fornavn*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        const errorMessage = screen.getByText('Udfyld venligst dette felt');
        expect(errorMessage).toBeInTheDocument();
    });

    it('Forname should not display error message "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = screen.getByLabelText('Fornavn*');
        fireEvent.change(inputField, { target: { value: 'John' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });
    it('Forname should display error message "Udfyld venligst dette felt", when user tries to type with numbers', async () => {
        render (<App />);

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = screen.getByLabelText('Fornavn*');
        await userEvent.type(inputField, '123');
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    //Efternavn Field Testing
    it('Efternavn should display error message "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Efternavn*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    it('Efternavn should not display error message "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Efternavn*');
        fireEvent.change(inputField, { target: { value: 'Madsen' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    it('Efternavn should display error message "Udfyld venligst dette felt", when user tries to type with numbers', async () => {
        render (<App />);

        // Handle Auto Focus
        fireEvent.change(screen.getByLabelText('Fornavn*'), { target: { value: 'Bob' }})

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = screen.getByLabelText('Efternavn*');
        await userEvent.type(inputField, '123');
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    //  Email Field Testing
    it('Email should display error message "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);



        const inputField = screen.getByLabelText('Email*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    // Testing Invalid Emails Logic 1
    it('field Email shouldnt accept the following emails and display "ugyldig email"', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Email*');
        fireEvent.change(inputField, { target: { value: '#@%^%#$@#$@#.com' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('ugyldig email');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    // Testing Invalid Emails Logic 1
    it('field Email shouldnt accept the following emails and display "ugyldig email"2', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Email*');
        fireEvent.change(inputField, { target: { value: 'email@example.com (Joe Smith)' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('ugyldig email');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    // Testing Valid Email Logic
    it('field Email should accept the following emails and should not display "ugyldig email"', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Email*');
        fireEvent.change(inputField, { target: { value: 'mom-mm@vip.cybercity.dk' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('ugyldig email');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    // Testing Valid Email Logic
    it('field Email should accept the following emails and should not display "ugyldig email"2', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Email*');
        fireEvent.change(inputField, { target: { value: 'simonmadsen99@gmail.com' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('ugyldig email');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    // Phone Number Field Testing
    it('field Telefonnummer should display "Udfyld venligst dette felt" when number is too short', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Telefonnummer*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    // Testing number short number error logic
    it('field Telefonnummer should display "Telefonnummer skal være 8 tegn langt." when number is too short', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Telefonnummer*');
        fireEvent.change(inputField, { target: { value: '9999999' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Telefonnummer skal være 8 tegn langt.');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    // Testing number correct logic
    it('field Telefonnummer should not display any errors, when typed in correctly', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Telefonnummer*');
        fireEvent.change(inputField, { target: { value: '99999999' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Telefonnummer skal være 8 tegn langt.');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    // User cannot type in chars test.
    it('field Telefonnummer should not allow users to type in chars', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Telefonnummer*');
        const inputField2 = screen.getByLabelText('Fornavn*');

        fireEvent.change(inputField2, { target: { value: 'Simon' }});

        await userEvent.type(inputField, 'testtest');
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    // Address Field Testing
    it('field Adresse should display "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Vejnavn og husnummer*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    it('field Adresse should not display "Udfyld venligst dette felt" when typed in correctly', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Vejnavn og husnummer*');
        fireEvent.change(inputField, { target: { value: 'Testvej 123' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    // Zip Code Field Testing
    it('field Postnummer should display "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Postnummer*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    it('field Postnummer should display "Udfyld venligst dette felt" when user typer in chars', async () => {
        render(<App />);

        // Handle focus
        await userEvent.type(screen.getByLabelText('Fornavn*'), 'Simon');

        const inputField = screen.getByLabelText('Postnummer*');
        userEvent.type(inputField, 'dwqklkldwæqoew');
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    it('field Postnummer should not display "Udfyld venligst dette felt" when typed in correctly', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('Postnummer*');
        fireEvent.change(inputField, { target: { value: '2400' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    // City Field Testing
    it('field By should display "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('By*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    it('field By should not display "Udfyld venligst dette felt" when typed in correctly', async () => {
        render(<App />);

        const inputField = screen.getByLabelText('By*');
        fireEvent.change(inputField, { target: { value: 'København' }});
        fireEvent.blur(inputField);

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });
});