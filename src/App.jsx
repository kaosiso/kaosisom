// App.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Kaosisochukwu | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio website of Kaosisochukwu, a full-stack developer specializing in React and Node.js."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React, Node.js, Portfolio, Kaosisochukwu"
        />
        <meta name="author" content="Kaosisochukwu Nwachukwu" />
      </Helmet>

      <main style={{ padding: "2rem" }}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          This is the home page of my React + Vite powered developer portfolio.
        </p>
      </main>
    </>
  );
};

export default App;
