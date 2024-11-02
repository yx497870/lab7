import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to Yixuan's lab7!</h1>
        <p>
          This is the React application of lab7 Here.
        </p>
        <button
            className="App-button"
            onClick={() => alert("Button clicked!")}
        >
          <p> Click here for surprise </p>
        </button>

      </header>
    </div>
  );
}

export default App;
