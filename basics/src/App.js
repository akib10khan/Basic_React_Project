import './App.css';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Greeting from './Greeting';

function App() {
  let name = 'Akib';
  return (
    <div>
    <h1>Hello from React Js</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
    {/* <Home name = {'Akib'} age = {24} />
    <About />
    <Contact /> */}
    </div>
  );
}

export default App;
