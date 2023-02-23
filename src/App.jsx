import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/Components";
import { Home, Contact, Projects } from "./pages/Pages";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
