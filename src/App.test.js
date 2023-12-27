import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders my name", () => {
    render(<App />);
    const linkElement = screen.getByText(/Shonasir Alimdjanov/i);
    expect(linkElement).toBeInTheDocument();
});
