import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

export const Navbar = () => {
  return (
    <header
      style={{
        display: "flex",
        margin: "0 auto",
        paddingTop: "2em",
        width: 200,
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
};

export const AppRouter = ({ activePath }: { activePath?: string }) => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? activePath : ""}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
