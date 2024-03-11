import {render, fireEvent, screen} from "@testing-library/react";
import {describe, it, expect, vi} from "vitest";
import { waitFor } from "@testing-library/react";
import contactAndDelivery from "../../src/delivery-and-contact-info/ContactAndDelivery.tsx";
import ContactAndDelivery from "../../src/delivery-and-contact-info/ContactAndDelivery.tsx";
import {initialFormData} from "../../src/data/initialFormData.tsx";
import React from "react";

describe(`Testing ${contactAndDelivery.name}`, async () => {
    it('simple render test', async () => {
        const mockSetContactAndDeliveryFormData  = vi.fn()
        const mockUseState = vi.spyOn(React, 'useState');

        mockUseState.mockImplementation((initialState) => {
            if (initialState === initialFormData) {
                return [initialState, mockSetContactAndDeliveryFormData];
            }
            return [initialState, vi.fn()];
        });
        render(
            <ContactAndDelivery
                formSubmitted={false}
                formData={ { ...initialFormData } }
                setContactAndDeliveryFormData={mockSetContactAndDeliveryFormData}
                />
        );

        const inputField = screen.getByRole('input', { name: 'Fornavn*' });
        fireEvent.change(inputField, { target: { value: 'John' }});
        fireEvent.blur(inputField);

        await waitFor(() => {
            const errorMessage = screen.queryByText('Udfyld venligst dette felt');
            expect(errorMessage).not.toBeInTheDocument()
        });
    });
});