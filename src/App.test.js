import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const header = screen.getByText(/mocking/i);
  expect(header).toBeInTheDocument();
});

test("increment and decrement button click events", async() => {
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  render(
    <App
      count={0}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
  const Count=screen.getByText(/Count: 0/i)
  const incrementButton = screen.getByRole("button", { name: /increment/i });
  const decrementButton = screen.getByRole("button", { name: /decrement/i });

  act(() => {
  userEvent.click(incrementButton);
  });

  act(() => {
    userEvent.click(decrementButton);
  });
  expect(Count).toBeInTheDocument()
  expect(handleIncrement).toHaveBeenCalledTimes(0);
  expect(handleDecrement).toHaveBeenCalledTimes(0);
});
