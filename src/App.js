import logo from './logo.svg';
import './App.css';
import Funcomp from './components/Funcopm';
import Classcomp from './components/Classcomp';
import JSXcomp from './components/JSXcomp';
import Props from './components/Props';
function App() {
  return (
    <div className="App">
     <Funcomp/>
     <Classcomp/>
     <JSXcomp/>
    <Props fname='sitaram' lname='kudireddy'>
      <h1>this is props</h1>
    </Props>
    <Props fname='geeta' lname='vanga'>
      <button>click</button>
    </Props>
    <Props fname='mahesh' lname='achanta'></Props>
    </div>
  );
}

export default App;
