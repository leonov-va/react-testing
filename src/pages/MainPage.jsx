import React from "react";
import Counter from "../components/Counter/Counter";

const MainPage = () => {
  return (
    <div data-testid="main-page">
      <h1>Main page</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
