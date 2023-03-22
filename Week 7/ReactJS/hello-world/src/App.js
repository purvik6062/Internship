import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       <Welcome />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}

        {/* <ClassClick /> */}

        {/* <FunctionClick /> */}

        {/* <Counter /> */}
        {/* <Message /> */}

        {/* <Greet name='Tony Stark' heroName='Ironman'>
          <p>This is a children props</p>
        </Greet>
        <Greet name='Peter Parker' heroName='Spiderman'>
          <button>Action</button>
        </Greet>
        <Greet name='Stephen Strange' heroName='Doctor Strange' /> */}

        {/* <Welcome name='Tony Stark' heroName='Ironman' />
        <Welcome name='Peter Parker' heroName='Spiderman' />
        <Welcome name='Stephen Strange' heroName='Doctor Strange' /> */}

        {/* <Hello /> */}

      </div>
    )
  }
}

export default App;
