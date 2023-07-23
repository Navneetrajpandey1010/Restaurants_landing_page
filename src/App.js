import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadingCard from "./components/HeadingCard";
import Food from "./components/Food";
import Category from "./components/Category";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadingCard/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
