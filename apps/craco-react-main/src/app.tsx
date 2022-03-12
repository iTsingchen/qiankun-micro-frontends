import { BrowserRouter as Router, NavLink } from "react-router-dom";

import logo from "./logo.svg";
import "./app.css";

import { SubAppSpinner } from "./sub-app-spinner";

type Props = {
  loading: boolean;
};

function App({ loading }: Props) {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <NavLink to="react">React</NavLink>
          <NavLink to="vue">Vue</NavLink>
        </header>
        <main className="main">
          <SubAppSpinner spinning={loading} delay={50}>
            <section id="slot" className="slot"></section>
          </SubAppSpinner>
        </main>
      </div>
    </Router>
  );
}

export default App;
