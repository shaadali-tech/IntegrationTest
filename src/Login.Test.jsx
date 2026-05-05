import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { vi } from "vitest";

test("login works only with valid input", async () => {
  const mockLogin = vi.fn();

  render(<Login onLogin={mockLogin} />);

  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const button = screen.getByRole("button", { name: /login/i });

  // ❌ Submit empty form
  await userEvent.click(button);
  expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
  expect(mockLogin).not.toHaveBeenCalled();

  // ✅ Fill inputs
  await userEvent.type(emailInput, "test@gmail.com");
  await userEvent.type(passwordInput, "123456");

  // ✅ Submit valid form
  await userEvent.click(button);

  expect(mockLogin).toHaveBeenCalledTimes(1);
  expect(mockLogin).toHaveBeenCalledWith({
    email: "test@gmail.com",
    password: "123456",
  });
});
