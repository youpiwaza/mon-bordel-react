import logo from './logo.svg';
import './App.css';
import Welcome from './components/3composEtClasses/Welcome';
import WelcomeClass from './components/3composEtClasses/WelcomeClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Mon projet :D 🍱</h2>

        <h3>Composants et props</h3>
        <p>Le <a href="https://fr.reactjs.org/docs/components-and-props.html" target="blank">lien vers la doc</a></p>
        <Welcome name="Max" />
        <WelcomeClass name="Max" />
      </header>
    </div>
  );
}

export default App;
