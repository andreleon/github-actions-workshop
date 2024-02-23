import logo from "./github-actions.svg";
import "./App.css";

function App() {
  let githubMessage = "$CUSTOM_MESSAGE";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{githubMessage}</p>

        <a
          className="App-link"
          href="https://docs.github.com/en/actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GitHub Actions
        </a>
      </header>
    </div>
  );
}

export default App;
