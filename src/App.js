import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="text-center App-footer">
          <small>
            <a
              href="https://github.com/SeattleDantz/react-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Tricia Brigham
          </small>
        </footer>
      </div>
    </div>
  );
}
