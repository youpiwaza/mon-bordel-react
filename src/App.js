import logo from './logo.svg';
import './App.css';
import Welcome from './components/4composEtClasses/Welcome';
import WelcomeClass from './components/4composEtClasses/WelcomeClass';
import Comment from './components/4composEtClasses/Comment/Comment';
import Clock from './components/5etatEtCycleDeVie/Clock';
import Button from './components/6events/Button';
import Toggle from './components/6events/Toggle';
import Greeting  from './components/7affichageConditionnel/Greeting';

const commentData = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

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
        <Comment
          date={commentData.date}
          text={commentData.text}
          author={commentData.author}
        />

        <h3>État et cycle de vie</h3>
        <p>Le <a href="https://fr.reactjs.org/docs/state-and-lifecycle.html" target="blank">lien vers la doc</a></p>
        <Clock />

        <h3>Evénements</h3>
        <Button />
        <Toggle />

        <h3>Affichage conditionnel</h3>
        <p>Compo Greeting non logué :</p><Greeting />
        <p>Compo Greeting logué :</p><Greeting isLoggedIn={true} />
        
      </header>
    </div>
  );
}

export default App;
