import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";
import Counter from "./Counter";

describe("Counter test", () => {
  test("test counter", () => {
    // const { getByTestId } = render(
    //   renderWithRedux(<Counter />, {
    //     counter: { value: 10 },
    //   })
    // );
    const { getByTestId } = render(
      renderTestApp(null, {
        route: "/",
        initialState: { counter: { value: 10 } },
      })
    );
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });
});
