import { useState } from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
