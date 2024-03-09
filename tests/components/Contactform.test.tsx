import '@testing-library/jest-dom';
import {render, fireEvent, queryByText} from "@testing-library/react";
import {beforeEach, describe, it, vi} from "vitest";
import {initialFormData} from "../../src/data/initialFormData.tsx";
import ContactForm from "../../src/delivery-and-contact-info/contactform/ContactForm.tsx";
import { waitFor } from "@testing-library/react";

describe('Testing Contactform', async () => {
    // Forname Field Testing
    // Testing Forname Empty Field Error Logic
    it('Forname should display error message "Udfyld venligst dette felt" when empty', () => {
        // Mock data for form
        const setContactAndDeliveryFormData = vi.fn();
        const { getByLabelText, getByText } = render(
            <ContactForm
                formSubmitted={false}
                formData={{  ...initialFormData  }}
                setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            />
        );

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = getByLabelText('Fornavn*');
        fireEvent.change(inputField, { target: { value: '' }});
        fireEvent.blur(inputField)

        // Search for the error message on the screen
        const errorMessage = getByText('Udfyld venligst dette felt');
        expect(errorMessage).toBeInTheDocument()
    });

    //DOES NOT WORK. CANNOT ACCESS THE INPUT VALUE FOR SOME GOOD DAMN FUCKING REASON. WILL LOOK AT THIS TOMORROW.....
    it('Forname should not display error message "Udfyld venligst dette felt" when empty', async () => {
        // Mock data for form
        const setContactAndDeliveryFormData = vi.fn();
        const { getByLabelText, queryByText } = render(
            <ContactForm
                formSubmitted={false}
                formData={{  ...initialFormData  }}
                setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            />
        );

        // Find input field for Fornavn, simulate writing in the field and then click away from the field.
        const inputField = getByLabelText('Fornavn*');
        fireEvent.change(inputField, { target: { value: 'John' }});
        fireEvent.blur(inputField)

        // Search for the error message on the screen
        await waitFor(() => {
            const errorMessage = queryByText('Udfyld venligst dette felt');
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