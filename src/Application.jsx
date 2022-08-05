import Nullstack from "nullstack";
import "./Application.css";
import Home from "./Home";

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = "en-US";
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap" rel="stylesheet" />
        <title>Quantum Coin Flip</title>
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    );
  }
}

export default Application;
