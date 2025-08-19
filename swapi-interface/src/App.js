import React from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 container py-4">
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;