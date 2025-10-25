import React from "react";
import Layout from "./components/Layout";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Layout children={<h1>hello world</h1>} />
    </>
  );
};

export default App;
