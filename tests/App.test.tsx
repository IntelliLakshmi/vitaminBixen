/*
* Typically used for tests that concern the App component itself
*
* Examples:
* - Checking if the App component renders correctly.
* - Testing the integration of various components within the App
* - Testing any logic that’s directly part of the App component.
*/
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App";

//Just a simple example. Looking for text "Varer i indkøbskurven". If found returns true
describe(App.name, () => {
    it("should render", () => {
        render(<App />);
        const textElement = screen.getByText(/Varer i indkøbskurven/i);
        expect(textElement).toBeInTheDocument();
    });
});