import {render, fireEvent, screen} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import { waitFor } from "@testing-library/react";
import App from "../../src/App.tsx";

describe('Testing Contactform', async () => {
    // Forname Field Testing
    // Testing Forname Empty Field Error Logic
    it('Forname should display error message "Udfyld venligst dette felt" when empty', () => {
        // Mock data for form
        render(<App /> );

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = screen.getByLabelText('Fornavn*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField)

        // Search for the error message on the screen
        const errorMessage = screen.getByText('Udfyld venligst dette felt');
        expect(errorMessage).toBeInTheDocument()
    });

    it('Forname should not display error message "Udfyld venligst dette felt" when empty', async () => {
        render(<App />);

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = screen.getByLabelText('Fornavn*');
        fireEvent.change(inputField, { target: { value: 'John' }});
        fireEvent.blur(inputField)

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument()
        });
    });

    /*
    // Testing Valid Emails Logic
    it('field Email should accept the following emails', () => {
        const setContactAndDeliveryFormData = vi.fn();
        const { getByLabelText, queryByText } = render(
            <ContactForm
                formSubmitted={false}
                formData={initialFormData}
                setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            />
        );

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = getByLabelText('Email*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField)
    });
     */

    /*
    it('field Email shouldnt accept the following emails and display "ugyldig email"', () => {
        // Testing Invalid Emails Logic
    });

    it('field Telefonnummer should display "Telefonnummer skal være 8 tegn langt." when number is too short', () => {
        // Testing Short Number Logic
    });

 */

    //More test to add.

});