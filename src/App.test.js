import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("TEST APP", () => {
  test("getByText, getByRole, getByPlaceholderText", () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();

    // screen.debug()
  });

  test("queryByText (hello2)", () => {
    render(<App />);
    const helloWorldElem = screen.queryByText(/hello2/i);
    expect(helloWorldElem).toBeNull();
  });

  test("async findByText", async () => {
    render(<App />);
    // screen.debug()
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: "red" });
    // screen.debug()
  });

  test("click event", async () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("input event", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    // Искуственное событие
    // fireEvent.input(input, {
    //   target: {
    //     value: "123123",
    //   },
    // });
    // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    userEvent.type(input, "123123");
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
