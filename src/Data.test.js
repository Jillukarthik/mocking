import { render, screen } from "@testing-library/react";
import Data from "./Data";

test('renders a list of users', async () => {
    render(<Data />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })